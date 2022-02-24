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

ENV REACT_APP_GRAPHQL_SERVER_URL=http://localhost:4000/graphql

ENV REACT_APP_SECRET=d8514926303a6e6fe7303770b06e7083

WORKDIR /usr/share/nginx/html

COPY --from=build /usr/app/build .

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD [ "nginx","-g","daemon off;" ]