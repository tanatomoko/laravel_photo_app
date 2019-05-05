FROM redis:5.0.4-alpine
ARG time_zone="Asia/Tokyo"
RUN apk add tzdata \
  && cp "/usr/share/zoneinfo/${time_zone}" /etc/localtime \
  && apk del tzdata \
  && rm -rf /var/cache/apk/* \
EXPOSE 6379
CMD ["redis-server"]