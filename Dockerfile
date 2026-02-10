FROM node:20-alpine


# installing git to clone the app 
RUN apk add --no-cache git 

WORKDIR /app

# cloning the repo of the app
RUN git clone https://github.com/unicodeveloper/globalthreatmap.git .

# install the app with dependencies
RUN npm install --legacy-peer-deps

# Needed to reach the app from outside
EXPOSE 3000

# runing the app
CMD ["npm", "run", "dev"]

