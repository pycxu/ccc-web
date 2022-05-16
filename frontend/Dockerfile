FROM node:16.15.0-alpine as builder
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
RUN npm install
RUN yarn add bizcharts
COPY . ./
RUN npm run build

FROM node:16.15.0-alpine
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /app/build .
EXPOSE 4000
CMD ["serve", "-p","4000","-s","."]