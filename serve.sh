#!/bin/bash
# Simple static file server for local development

echo "🚀 Starting SURVIVE.money fork..."
echo "📍 Open http://localhost:8000"
echo "⚠️  Note: API endpoints won't work unless you have a backend running"
echo ""

# Try different methods
if command -v python3 &> /dev/null; then
  python3 -m http.server 8000
elif command -v npx &> /dev/null; then
  npx serve -l 8000
elif command -v php &> /dev/null; then
  php -S localhost:8000
else
  echo "❌ No static server available. Install python3, node, or php."
  exit 1
fi
