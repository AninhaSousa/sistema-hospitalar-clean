FROM node:20-alpine

WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todo o código do servidor (a pasta src)
COPY src ./src

# 🌟 ADICIONE ESTA LINHA NOVA AQUI EMBAIXO:
COPY frontend ./frontend

EXPOSE 3001

CMD ["node", "src/infrastructure/server.js"]