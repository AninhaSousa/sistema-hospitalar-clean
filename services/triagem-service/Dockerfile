FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY src ./src

COPY frontend ./frontend

EXPOSE 3001

CMD ["node", "src/infrastructure/server.js"]