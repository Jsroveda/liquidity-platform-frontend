
# Multi-stage build for the frontend
FROM node:18-alpine as frontend-builder

# Set working directory for frontend build
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY bun.lockb ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build the frontend
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built frontend to nginx
COPY --from=frontend-builder /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
