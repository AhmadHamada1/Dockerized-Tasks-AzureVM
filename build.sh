#!/bin/bash


echo "Starting Docker build process..."

if docker-compose build; then
    echo "Docker images built successfully."
else
    echo "Failed to build Docker images. Please check the Dockerfile and try again."
    exit 1
fi
