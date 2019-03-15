FROM node:10

WORKDIR /var/server

COPY package*.json /var/server/

RUN npm install

COPY . /var/server/

CMD [ "npm", "run", "start:dev"]