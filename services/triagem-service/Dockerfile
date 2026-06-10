# Usa uma imagem oficial do Node.js estável
FROM node:20-alpine

# Define a pasta de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências de produção (ignora as de teste para ficar leve)
RUN npm install --only=production

# Copia o restante do código do microsserviço
COPY . .

# Expõe a porta que o serviço usa
EXPOSE 3001

# Comando para iniciar o microsserviço
CMD ["npm", "start"]