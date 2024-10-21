#!/bin/bash

echo "Stopping Docker containers..."

if docker-compose down; then
    echo "Docker containers stopped successfully."
else
    echo "Failed to stop Docker containers. Please check if they were running and try again."
    exit 1
fi
