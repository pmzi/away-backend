FROM node:14.10.0-alpine3.10

WORKDIR away

COPY ./package.json ./package.json
COPY ./yarn.lock ./yarn.lock

RUN yarn

COPY . .

CMD ["npm", "start"]