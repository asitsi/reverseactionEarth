# Stage 1
FROM node:alpine3.18 as builder
WORKDIR /reverseaction-earth
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# Stage 2
FROM nginx:1-alpine3.18
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /reverseaction-earth/build .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]