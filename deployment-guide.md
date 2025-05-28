
# Frontend Integration Guide

## Merging into Main Platform Repo

### 1. Directory Structure
Place this frontend code in a `ui-frontend` subdirectory of your main platform repo:

```
platform-repo/
├── backend/
├── ui-frontend/          # This entire Lovable frontend
├── docker-compose.yml
├── Dockerfile
└── other-services/
```

### 2. Environment Variables for Production
Update your environment variables to point to your platform's services:

```env
# Production values for your platform
VITE_GRAPHQL_ENDPOINT=http://backend:4000/graphql
VITE_KAFKA_BROKER=kafka:9092
VITE_KAFKA_SSL=false
VITE_AUTH_ENDPOINT=http://backend:3001/auth
```

### 3. Docker Build Context
From your main platform repo root, build with:

```bash
docker build -f ui-frontend/Dockerfile ui-frontend/
```

Or update the Dockerfile paths to build from the platform root.

### 4. Integration with Your Backend
- The nginx.conf includes proxy rules for `/api/` and `/graphql` endpoints
- Adjust the `proxy_pass` URLs to match your backend service names
- Update CORS settings on your backend to allow the frontend domain

### 5. Development Workflow
- Continue developing in Lovable
- Changes sync to GitHub automatically
- Pull changes into your main platform repo as needed
- The frontend can be built independently or as part of the full platform

### 6. Build Script Integration
Add to your main platform's package.json or Makefile:

```bash
# Build frontend only
cd ui-frontend && npm run build

# Build full platform
docker-compose build
```
