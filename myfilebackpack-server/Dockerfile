# This is the main Dockerfile composing of other docker files
# This is the Dockerfile for the MyFileBackpack server repository
# Last Edited: April 19 2025

# Use node version 16.15.0
FROM node:16.15.0

LABEL maintainer="Supriya Mutharasan <supriyamutharasan@gmail.com"
LABEL description="MyFileBackpack node.js microservice"

# We default to use port 8080 in our service
ENV PORT=8080

# Reduce npm spam when installing within Docker
# https://docs.npmjs.com/cli/v8/using-npm/config#loglevel
ENV NPM_CONFIG_LOGLEVEL=warn

# Disable colour when run inside Docker
# https://docs.npmjs.com/cli/v8/using-npm/config#color
ENV NPM_CONFIG_COLOR=false

# Use /app as our working directory
WORKDIR /app

# Copy the package.json and package-lock.json files into the working dir (/app)
COPY package.json package-lock.json ./

# Install node dependencies defined in package-lock.json
RUN  npm ci --only=production

# Copy src to /app/src/
COPY ./src ./src

# Copy .htpasswd
COPY ./tests/.htpasswd ./tests/.htpasswd

# Start the container by running our server
CMD ["npm", "start"]

# We run our service on port 8080
EXPOSE 8080
