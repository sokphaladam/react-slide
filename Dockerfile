FROM node:8

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install
COPY . .
RUN npm run build
RUN npm install -g serve

EXPOSE 80
CMD [ "npm", "run", "serve" ]