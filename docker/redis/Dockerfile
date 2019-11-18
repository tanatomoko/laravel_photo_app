FROM redis:5.0.4-alpine
ARG time_zone="Asia/Tokyo"
RUN apk add --no-cache tzdata \
  && cp "/usr/share/zoneinfo/${time_zone}" /etc/localtime \
  && apk del tzdata
EXPOSE 6379
CMD ["redis-server"]