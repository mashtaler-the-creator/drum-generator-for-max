#!/bin/sh
# Renders web/og-card.html to web/assets/og.png (1200x630) with headless Chrome.
# Re-run when the card changes; the PNG is committed so CI needs no browser.
set -e
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
mkdir -p "$ROOT/web/assets"
"$CHROME" --headless=new --disable-gpu --hide-scrollbars \
  --window-size=1200,630 --force-device-scale-factor=1 \
  --screenshot="$ROOT/web/assets/og.png" "file://$ROOT/web/og-card.html" 2>/dev/null
echo "web/assets/og.png written ($(wc -c < "$ROOT/web/assets/og.png") bytes)"
