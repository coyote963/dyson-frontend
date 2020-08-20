FROM node:12.18.3 as builder
SHELL ["/bin/bash", "-c"]
WORKDIR /opt/app-root/src/
COPY . .
RUN npm install --dev --verbose
RUN npm run build
#===============================#
FROM nginx as runtime
COPY --from=builder opt/app-root/src/dist/dyson-frontend opt/app-root/src
SHELL ["/bin/bash", "-c"]
WORKDIR /opt/app-root/src/
COPY nginx.conf /etc/nginx/
EXPOSE 8082
CMD ["nginx", "-g", "daemon off;"]
