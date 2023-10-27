# FROM node:18-alpine
FROM node:18.7.0

RUN apt-get update
RUN apt-get install -y python3

WORKDIR /app

COPY package*.json ./
COPY . .
# COPY . /app

RUN npm install

RUN npm run build --verbose

EXPOSE 9000
CMD [ "npm", "run", "serve" ]
