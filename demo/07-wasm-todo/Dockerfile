# build stage
FROM golang:1.11.1-alpine3.8 AS builder
WORKDIR /src

COPY serve/main.go .
# removing debug informations and compile only for linux target and disabling cross compilation.
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 \
 go build -a -installsuffix cgo -ldflags="-w -s" -o todo .

COPY . .
# compile for WebAssembly
RUN GOOS=js GOARCH=wasm go build -a -installsuffix cgo -ldflags="-w -s" -o main.wasm \
    && rm -r serve/ main.go

# final stage
# If you need SSL certificates for HTTPS, replace `FROM SCRATCH` with:
#
#   FROM alpine:3.7
#   RUN apk --no-cache add ca-certificates
# busybox maybe more appropriate for debugging than scratch
FROM scratch
WORKDIR /app
COPY --from=builder /src .
EXPOSE 8080
CMD  ["./todo"]