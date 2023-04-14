FROM node:18-alpine3.17
RUN apk update && apk upgrade
WORKDIR /usr/app

COPY . ./
RUN yarn install

RUN yarn build
RUN yarn start

EXPOSE 3000

#ENTRYPOINT ["tail", "-f", "/dev/null"]