#!/bin/bash

SLM_IMAGE="rojanjose/max-slm"

# Build content
echo "Cleaning the project..."
npm run clean

echo "Building the content..."
npm run build

echo "Building the image..."
cd public
docker build -f ../Dockerfile.static  -t ${SLM_IMAGE} .
docker push ${SLM_IMAGE}
cd ..

echo "Successfuly completed the Build!"

