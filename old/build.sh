#!/bin/bash
echo "Starting build..."
cd ./code/javascripts/npm
echo "Building codewars index.js"
npm run build
cd ../../../codewars
echo "Deploying to Github Pages"
npm run deploy
