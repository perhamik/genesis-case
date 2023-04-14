FROM node:18-alpine3.17
RUN apk update && apk upgrade
WORKDIR /usr/app

COPY . ./
RUN yarn install

EXPOSE 3000
RUN yarn build
CMD ["yarn", "start"]


#ENTRYPOINT ["tail", "-f", "/dev/null"]