#!/bin/bash
export DISPLAY=:1

# Start the virtual display
Xvfb :1 -screen 0 1280x800x24 &

# Give it a moment to spin up
sleep 2

# Start a lightweight window manager
fluxbox &

# Start noVNC (websockify for VNC over HTTP) on port 6080
websockify --web /usr/share/novnc/ 6080 localhost:5900 &

sleep 2

# Start Chromium, opening Discord Web. This is a real (non-headless) browser!
chromium --no-sandbox --disable-dev-shm-usage --remote-debugging-port=9222 "https://discord.com/app" &

# Wait for all background processes
wait