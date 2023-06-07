FROM node:20-alpine3.17
RUN apk update && apk upgrade
WORKDIR /usr/app

COPY . ./
RUN npm install
RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start"]


ENTRYPOINT ["tail", "-f", "/dev/null"]