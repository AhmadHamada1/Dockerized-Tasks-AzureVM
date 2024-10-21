#!/bin/bash

echo "Restarting Docker containers..."

SCRIPT_DIR=$(dirname "$0")

"$SCRIPT_DIR/stop.sh"
if [ $? -ne 0 ]; then
    echo "Failed to stop Docker containers. Aborting restart."
    exit 1
fi

"$SCRIPT_DIR/run.sh"
if [ $? -ne 0 ]; then
    echo "Failed to start Docker containers. Please check the logs."
    exit 1
fi

echo "Docker containers restarted successfully."

