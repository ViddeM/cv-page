FROM node:latest AS build-step

RUN mkdir -p /usr/src/vidarmagnusson-dot-com/frontend
RUN chown -R node /usr/src/vidarmagnusson-dot-com/frontend

USER node

WORKDIR /usr/src/vidarmagnusson-dot-com/frontend

COPY ./src ./src
COPY package.json .
COPY ./public ./public

RUN yarn install
RUN yarn global add react-scripts
RUN yarn build

FROM nginx:alpine
RUN rm /etc/nginx/conf.d/*
COPY nginx.conf /etc/nginx/conf.d/nginx.conf
COPY --from=build-step /usr/src/vidarmagnusson-dot-com/frontend/build/ /usr/share/nginx/html/