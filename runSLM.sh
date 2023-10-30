#!/bin/bash

# Build
# cd public
# docker build -f ../Dockerfile.static  -t rojanjose/max-slm .

# Run file
docker run -it --rm -d -p 8080:80 --name slm rojanjose/max-slm
