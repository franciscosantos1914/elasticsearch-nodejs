FROM node:18.18.2-slim
WORKDIR /app
COPY . .
RUN npm install
RUN npm install -g typescript
CMD npm run dev
EXPOSE 3333