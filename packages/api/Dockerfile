FROM node:hydrogen-alpine

# Create app directory and set ownership to node user
RUN mkdir /app && \
  chown -R node:node /app
  
# Set working directory
WORKDIR /app

# non-root user
USER node

# Copy dependency-related files
COPY tsconfig*.json ./
COPY package.json ./
COPY nest-cli*.json ./

# Install dependencies
RUN npm install

# Copy source files
COPY src/ src/

# Build the application
RUN npm run build

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["node", "dist/main.js"]
