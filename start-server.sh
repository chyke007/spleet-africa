#!/usr/bin/env bash

# Begin package installation
echo "Installing Dependencies"
npm install 

echo "Dependencies Installed!"

# Build Files
npm run build-ts

# Run the app
npm start

echo "Server is listening..."