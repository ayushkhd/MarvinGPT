#!/bin/bash

# Start Node.js server
node server.js &

# Start live server for index.html
npx live-server &

# Start client.py
python3 client.py &

# Start plugin.py
python3 plugin.py &

# Change to the sandbox directory
cd /path/to/sandbox

# Start the React app
npm run start &