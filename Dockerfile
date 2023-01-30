FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
# Add node dependencies to start the express server (server.js)
RUN npm install --no-save shelljs express http cors cli-color path url fs serve-favicon morgan

EXPOSE 4200
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
