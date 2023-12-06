FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

ENV NODE_ENV production

RUN npm install

COPY . .

EXPOSE 3000

CMD npm run build