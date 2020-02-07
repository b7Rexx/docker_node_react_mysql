FROM node:13
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["node","index.js"]
CMD ["node","src/database/migration.js"]
