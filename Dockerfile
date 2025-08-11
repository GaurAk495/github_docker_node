FROM node:current-alpine3.22

WORKDIR /app

# Copy package files first (better caching)
COPY package*.json ./           
COPY tsconfig.json ./ 
COPY src ./src

# Install dependencies
RUN npm install

# Copy application code
COPY nodemon.json ./

RUN npm run build

ENTRYPOINT ["npm", "run", "start"]