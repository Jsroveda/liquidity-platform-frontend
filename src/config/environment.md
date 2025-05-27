
# Environment Configuration

This document outlines the environment variables needed for the Liquidity Hub frontend.

## Required Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# GraphQL API Configuration
VITE_GRAPHQL_ENDPOINT=http://localhost:4000/graphql

# Kafka Configuration
VITE_KAFKA_BROKER=localhost:9092
VITE_KAFKA_SSL=false
VITE_KAFKA_USERNAME=
VITE_KAFKA_PASSWORD=

# Authentication
VITE_AUTH_ENDPOINT=http://localhost:3001/auth
```

## Production Environment

For production deployments, update these values accordingly:

```env
# Production GraphQL API
VITE_GRAPHQL_ENDPOINT=https://api.liquidityhub.com/graphql

# Production Kafka
VITE_KAFKA_BROKER=kafka.liquidityhub.com:9092
VITE_KAFKA_SSL=true
VITE_KAFKA_USERNAME=frontend-client
VITE_KAFKA_PASSWORD=your-secure-password

# Production Auth
VITE_AUTH_ENDPOINT=https://auth.liquidityhub.com
```

## Integration Notes

1. **GraphQL**: The Apollo client is configured with automatic retries and error handling
2. **Kafka**: Events are consumed in real-time with automatic reconnection
3. **Authentication**: JWT tokens are automatically added to GraphQL requests
4. **Error Handling**: All network errors are logged and can be monitored
