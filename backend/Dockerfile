FROM node:16

RUN mkdir /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install 

COPY . .

RUN yarn build

EXPOSE 4000

CMD [ "npm", "start" ]