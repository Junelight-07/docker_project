FROM node:alpine

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /usr/src/app

COPY . .

RUN npm install

USER appuser

EXPOSE 3000
