#!/bin/bash



echo "Starting Docker containers..."

if docker-compose up -d --build; then
    echo "Docker containers are up and running."
else
    echo "Failed to start Docker containers. Please check the logs for more details."
    exit 1
fi
