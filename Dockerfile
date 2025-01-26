# documentacao https://docs.docker.com/get-started/docker-concepts/building-images/writing-a-dockerfile/
FROM node:20-alpine
WORKDIR /app
COPY . .
COPY package.json yarn.lock ./
RUN yarn install --production
EXPOSE 3000
CMD ["node", "index.js"]
