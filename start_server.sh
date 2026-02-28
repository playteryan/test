#!/usr/bin/env bash
set -euo pipefail

PORT="${1:-8000}"

echo "Starting local server on http://127.0.0.1:${PORT}/"
echo "Press Ctrl+C to stop."
python3 -m http.server "${PORT}"
