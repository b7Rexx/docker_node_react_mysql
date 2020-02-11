FROM node:13
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 5000
#CMD ["node","src/database/migration.js"]
CMD ["node", "index.js;"]
