FROM node:latest

WORKDIR /app
COPY . .

RUN npm install
RUN npm install -g @angular/cli
RUN npm run builddev

CMD ng serve --host 0.0.0.0