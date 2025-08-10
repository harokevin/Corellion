# Vite/React frontend Dockerfile
FROM --platform=linux/amd64 node:20-alpine AS build
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM --platform=linux/amd64 node:20-alpine AS serve
WORKDIR /app
COPY --from=build /app/dist ./dist
RUN npm install -g serve
EXPOSE 5173
CMD ["serve", "-s", "dist", "-l", "5173"]
