# build stage
FROM node:10-alpine AS base
FROM base AS builder
WORKDIR /src
COPY package.json .
RUN  npm install
COPY . .
RUN npm run build


# final stage
FROM base
WORKDIR /app
COPY --from=builder /src .
EXPOSE 3000
CMD ["node_modules/.bin/next", "start"]
