# build stage
FROM golang:1.10-alpine3.7 AS builder
WORKDIR /src

COPY main.go .
# removing debug informations and compile only for linux target and disabling cross compilation.
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 \
 go build -a -installsuffix cgo -ldflags="-w -s" -o todo . \
 && rm main.go

COPY . .


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
CMD  ["./todo"]