# syntax=docker/dockerfile:1
ARG NODE_VERSION=20.4.0
FROM node:${NODE_VERSION}-alpine as build

WORKDIR /usr/src/app

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci

COPY . .

RUN npm run build

FROM nginx:alpine as final

COPY --from=build /usr/src/app/public /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
