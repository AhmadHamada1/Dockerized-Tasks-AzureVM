#!/bin/bash

# Variables
REMOTE_DB_PATH="/home/sre/Test1/Test/backend/instance/data.db" 
REMOTE_BACKUP_DIR="/home/sre/Test1/backub"       
TIMESTAMP=$(date +"%F_%T")
REMOTE_BACKUP_FILE="db_backup_$TIMESTAMP.sqlite"

# Create backup directory if it doesn't exist
mkdir -p "$REMOTE_BACKUP_DIR"

# Copy the database file to the backup directory
cp "$REMOTE_DB_PATH" "$REMOTE_BACKUP_DIR/$REMOTE_BACKUP_FILE"

# Check if the backup was successful
if [ $? -eq 0 ]; then
    echo "SQLite database backup completed: $REMOTE_BACKUP_DIR/$REMOTE_BACKUP_FILE"
else
    echo "SQLite database backup failed."
    exit 1
fi

