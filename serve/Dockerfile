# build stage
FROM golang:1.10-alpine3.7 AS builder
WORKDIR /src
# The 4 'echo's are needed for blocked networks
RUN set -x \
        && echo "https://mirrors.ustc.edu.cn/alpine/v3.8/main" > /etc/apk/repositories \
        && echo "https://mirrors.ustc.edu.cn/alpine/v3.8/community" >> /etc/apk/repositories \
        && apk add --no-cache git \
        && echo "192.30.253.112 github.com" > /etc/hosts \
        && echo "151.101.185.194 github.global.ssl.fastly.net" >> /etc/hosts \
        && go get github.com/gin-gonic/gin github.com/gin-contrib/static \
        && rm -rf /var/cache/apk/*

COPY . .
# removing debug informations and compile only for linux target and disabling cross compilation.
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 \
 go build -a -installsuffix cgo -ldflags="-w -s" -o gin . \
 && rm main.go

# final stage
# If you need SSL certificates for HTTPS, replace `FROM SCRATCH` with:
#
#   FROM alpine:3.7
#   RUN apk --no-cache add ca-certificates
# busybox maybe more appropriate for debugging than scratch
FROM scratch
WORKDIR /app
COPY --from=builder /src .
EXPOSE 80
CMD  ["./gin"]
