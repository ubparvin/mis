#Stage 1
FROM node:16-alpine as build

WORKDIR /usr/app

COPY . ./

RUN yarn install --ignore-platform \
    && yarn add eslint-config-react-app -D \
    && yarn build

###########################################

#Stage 2
FROM nginx:1.21.5-alpine

WORKDIR /usr/share/nginx/html

COPY --from=build /usr/app/build .

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/nginx.conf /etc/nginx/conf.d/

EXPOSE 80

CMD [ "nginx","-g","daemon off;" ]