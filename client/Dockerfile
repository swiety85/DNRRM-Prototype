FROM node:10

WORKDIR /var/client

COPY package*.json /var/client/

RUN npm install

COPY . /var/client/

CMD [ "npm", "run", "start" ]