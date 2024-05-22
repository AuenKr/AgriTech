FROM node:20-alpine

WORKDIR /agritech

COPY ./package.json .
RUN npm install

COPY ./prisma ./prisma
RUN npm run db:generate
COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev:docker"]