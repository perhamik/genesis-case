FROM node:20-alpine3.17
RUN apk update && apk upgrade
WORKDIR /usr/app

COPY . ./
RUN yarn build

EXPOSE 3000
CMD ["yarn", "start"]


#ENTRYPOINT ["tail", "-f", "/dev/null"]