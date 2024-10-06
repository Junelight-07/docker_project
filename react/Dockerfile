FROM node:alpine

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN chown -R appuser:appgroup /usr/src/app/node_modules

USER appuser

EXPOSE 5173
