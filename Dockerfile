FROM node:8-slim

WORKDIR /app

ADD . /app

# Bundle each app
RUN cd app/core && npm install && npm start
# uncomment when have something here
# RUN cd /app/blog && npm install && npm start

RUN cd server && npm install

EXPOSE 3000

CMD ["node", "server/build/server.js"]
