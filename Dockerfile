FROM --platform=linux/amd64 node:alpine
# FROM node:alpine
COPY app.js .
CMD node app.js
