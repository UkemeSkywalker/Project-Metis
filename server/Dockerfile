# Use the latest Node.js LTS version as the base image
FROM node:lts-gallium

WORKDIR /app
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Expose the port
EXPOSE 5001

# Set the default command to run when starting the container
CMD [ "npm", "start" ]