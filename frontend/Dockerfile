FROM node:13 as node_builder
WORKDIR /app
COPY . ./
RUN npm install && npm run build

FROM nginx
COPY --from=node_builder /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
