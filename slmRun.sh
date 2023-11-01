#!/bin/bash


SLM_IMAGE="rojanjose/max-slm"

# Run image
docker run -it --rm -d -p 8080:80 --name slm ${SLM_IMAGE}
