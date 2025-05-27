
import { useEffect, useRef } from 'react';
import { Consumer } from 'kafkajs';
import { createKafkaConsumer, TreasuryEventTypes } from '@/lib/kafka-client';
import { useToast } from '@/hooks/use-toast';

interface UseKafkaEventsProps {
  topics: string[];
  groupId: string;
  onEvent?: (eventType: TreasuryEventTypes, payload: any) => void;
}

export const useKafkaEvents = ({ topics, groupId, onEvent }: UseKafkaEventsProps) => {
  const consumerRef = useRef<Consumer | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    let isSubscribed = true;

    const setupConsumer = async () => {
      try {
        const consumer = await createKafkaConsumer(groupId);
        consumerRef.current = consumer;

        // Subscribe to topics
        await Promise.all(topics.map(topic => consumer.subscribe({ topic })));

        // Start consuming messages
        await consumer.run({
          eachMessage: async ({ topic, partition, message }) => {
            if (!isSubscribed) return;

            try {
              const event = JSON.parse(message.value?.toString() || '{}');
              const { eventType, payload } = event;

              console.log(`Received event: ${eventType}`, payload);

              // Handle specific event types
              switch (eventType) {
                case TreasuryEventTypes.LIQUIDITY_POOL_UPDATED:
                  toast({
                    title: "Pool Updated",
                    description: `Liquidity pool ${payload.name} has been updated`,
                  });
                  break;
                case TreasuryEventTypes.RISK_THRESHOLD_BREACHED:
                  toast({
                    title: "Risk Alert",
                    description: `Risk threshold breached for ${payload.account}`,
                    variant: "destructive",
                  });
                  break;
                case TreasuryEventTypes.SETTLEMENT_COMPLETED:
                  toast({
                    title: "Settlement Complete",
                    description: `Settlement ${payload.settlementId} completed successfully`,
                  });
                  break;
              }

              // Call custom event handler if provided
              if (onEvent) {
                onEvent(eventType, payload);
              }
            } catch (error) {
              console.error('Error processing Kafka message:', error);
            }
          },
        });
      } catch (error) {
        console.error('Error setting up Kafka consumer:', error);
      }
    };

    setupConsumer();

    return () => {
      isSubscribed = false;
      if (consumerRef.current) {
        consumerRef.current.disconnect();
      }
    };
  }, [topics, groupId, onEvent, toast]);

  return {
    disconnect: () => {
      if (consumerRef.current) {
        consumerRef.current.disconnect();
      }
    },
  };
};
