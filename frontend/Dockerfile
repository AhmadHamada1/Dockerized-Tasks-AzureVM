# Frontend Dockerfile
FROM node:16 AS build
WORKDIR /app

# Copy package.json and package-lock.json for dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of your application code
COPY . .

# Build your application
RUN npm run build


# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

FROM nginx:alpine
# Copy the built files from the build stage to the Nginx content directory
COPY --from=build /app/build /usr/share/nginx/html
