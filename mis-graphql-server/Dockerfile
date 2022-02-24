FROM node:16

ENV APP_SECRET=d8514926303a6e6fe7303770b06e7083
ENV DB_HOST=misdb.cxrhsnhsojw3.us-west-2.rds.amazonaws.com
ENV DB_NAME=misdb
ENV DB_USERNAME=sysadmin
ENV DB_PASSWORD=qVRMH4Y=zY%$=XZS
ENV NODE_ENV=development
ENV WEB_APP_HOST=http://localhost:80
ENV PORT=4000
ENV SMTP_HOST=email-smtp.us-west-2.amazonaws.com
ENV SMTP_PORT=25
ENV SMTP_USERNAME=AKIAW55N6QVSRGZM3DEL
ENV SMTP_PASSWORD=BHwK5AADqPRXV961DX2DYtl1fdl7QrAYudctlCDN71XV

RUN mkdir /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install 

COPY . .

RUN yarn build

RUN echo $APP_SECRET 
RUN echo $DB_HOST 
RUN echo $DB_NAME 
RUN echo $DB_USERNAME 
RUN echo $DB_PASSWORD 
RUN echo $NODE_ENV 
RUN echo $WEB_APP_HOST 
RUN echo $PORT 
RUN echo $SMTP_HOST 
RUN echo $SMTP_PORT 
RUN echo $SMTP_USERNAME 
RUN echo $SMTP_PASSWORD

EXPOSE 4000

CMD [ "npm", "start" ]