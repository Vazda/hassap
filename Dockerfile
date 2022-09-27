FROM node:16

ARG ENV_NAME
ARG PORT

ENV PORT = 5000

WORKDIR /usr/src/app

COPY . .

RUN ls

RUN ls packages/api

RUN yarn install --frozen-lockfile

RUN yarn --cwd packages/api build:$ENV_NAME

# RUN yarn --cwd packages/api db:migrationAndSeed:$ENV_NAME

EXPOSE 8080



CMD ["npm", "run", "serve:api:d"]
