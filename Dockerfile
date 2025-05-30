
# Multi-stage build for the frontend
FROM node:18-alpine as frontend-builder

# Set working directory for frontend build
WORKDIR /app/ui-frontend

# Copy package files
COPY package*.json ./
COPY bun.lockb ./

# Install all dependencies not just prod dependencies
RUN npm ci 

# Copy source code
COPY . .

# Build the frontend
RUN npm run build

# Production stage - you can extend this for your full platform
FROM nginx:alpine

# Copy built frontend to nginx
COPY --from=frontend-builder /app/ui-frontend/dist /usr/share/nginx/html

# Copy nginx configuration (optional)
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
