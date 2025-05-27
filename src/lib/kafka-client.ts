
import { Kafka, Consumer, Producer } from 'kafkajs';

// Kafka client configuration
const kafka = new Kafka({
  clientId: 'liquidity-hub-frontend',
  brokers: [import.meta.env.VITE_KAFKA_BROKER || 'localhost:9092'],
  ssl: import.meta.env.VITE_KAFKA_SSL === 'true',
  sasl: import.meta.env.VITE_KAFKA_USERNAME ? {
    mechanism: 'plain',
    username: import.meta.env.VITE_KAFKA_USERNAME,
    password: import.meta.env.VITE_KAFKA_PASSWORD || '',
  } : undefined,
});

// Create producer instance
export const createKafkaProducer = async (): Promise<Producer> => {
  const producer = kafka.producer();
  await producer.connect();
  return producer;
};

// Create consumer instance
export const createKafkaConsumer = async (groupId: string): Promise<Consumer> => {
  const consumer = kafka.consumer({ groupId });
  await consumer.connect();
  return consumer;
};

// Event types for treasury operations
export enum TreasuryEventTypes {
  LIQUIDITY_POOL_CREATED = 'liquidity.pool.created',
  LIQUIDITY_POOL_UPDATED = 'liquidity.pool.updated',
  ACCOUNT_BALANCE_CHANGED = 'account.balance.changed',
  RISK_THRESHOLD_BREACHED = 'risk.threshold.breached',
  SETTLEMENT_COMPLETED = 'settlement.completed',
}

// Event publishing utility
export const publishEvent = async (
  producer: Producer,
  topic: string,
  eventType: TreasuryEventTypes,
  payload: any
) => {
  try {
    await producer.send({
      topic,
      messages: [
        {
          key: eventType,
          value: JSON.stringify({
            eventType,
            timestamp: new Date().toISOString(),
            payload,
          }),
        },
      ],
    });
    console.log(`Event published: ${eventType}`);
  } catch (error) {
    console.error('Error publishing event:', error);
  }
};
