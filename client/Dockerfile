FROM node:10

WORKDIR /var/client

COPY package*.json /var/client/

RUN npm install
RUN npm rebuild node-sass

COPY . /var/client/

CMD [ "npm", "run", "start" ]