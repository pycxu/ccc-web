FROM node:16.15.0-alpine
WORKDIR /app
COPY ..
RUN npm install
EXPOSE 8080
CMD [ "node", "server.js" ]