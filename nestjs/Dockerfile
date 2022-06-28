FROM node:lts-alpine3.16
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --only=production

COPY . .
RUN npm run build
CMD ["node", "dist/main"]