FROM node:11-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN npm install 

RUN npm install -g @babel/cli

RUN npm install -g @babel/core

RUN npm run compile

EXPOSE 3000

CMD ["npm", "run", "start"]