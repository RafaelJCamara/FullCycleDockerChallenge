FROM golang:alpine AS builder

WORKDIR /usr/src/app
COPY src/ .
RUN go build -o /go/helloworld

CMD ["/go/helloworld"]

FROM scratch

COPY --from=builder /go/helloworld /go/helloworld

CMD ["/go/helloworld"]