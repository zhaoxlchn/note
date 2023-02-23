FROM node:16
ADD docs /wwwhtml/docs
ADD package.json /wwwhtml
ADD package-lock.json /wwwhtml
WORKDIR /wwwhtml
RUN npm install
ENV BASE_PATH ""
RUN npm run docs:build
#COPY --from=builder /wwwhtml/docs/.vitepress/dist /www/note
#COPY --from=builder /wwwhtml/docs/.vitepress/dist /www
#CMD ["/bin/cp -R /wwwhtml/docs/.vitepress/dist/ /www"]
CMD /bin/cp -rf /wwwhtml/docs/.vitepress/dist/* /www


# 多阶段构建
#FROM node:16 as builder
#ADD docs /wwwhtml/docs
#ADD package.json /wwwhtml
#ADD package-lock.json /wwwhtml
#WORKDIR /wwwhtml
#RUN npm install
#RUN npm run docs:build

#FROM ubuntu/nginx:latest
#COPY --from=builder /wwwhtml/docs/.vitepress/dist /var/www/html/note
#COPY --from=builder /wwwhtml/docs/.vitepress/dist /var/www/html
