# Use official Node.js LTS Alpine image
FROM node:lts-alpine 

# Create app directory 
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install 

# Copy app source code
COPY . .

# Set correct permissions
RUN chown -R node:node /app 

# Expose port
EXPOSE 5001

# Run as non-root user
USER node

# Start app
CMD [ "node", "src/index.mjs" ]