FROM node:lts-alpine
RUN mkdir /portfolio
WORKDIR /portfolio
COPY . /portfolio
RUN apk update && \
    npm install -g npm @vue/cli && \
    npm install -g npm @vue/cli