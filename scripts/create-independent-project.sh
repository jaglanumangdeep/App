#!/usr/bin/env bash
set -euo pipefail

if [[ $# -lt 1 ]]; then
  echo "Usage: $0 <output-directory>"
  echo "Example: $0 ../AppStandalone"
  exit 1
fi

OUTPUT_DIR="$1"
SOURCE_DIR="$(pwd)"

if [[ -e "$OUTPUT_DIR" ]]; then
  echo "Error: output path already exists: $OUTPUT_DIR"
  exit 1
fi

mkdir -p "$OUTPUT_DIR"

rsync -a \
  --exclude='.git' \
  --exclude='node_modules' \
  --exclude='.expo' \
  --exclude='.DS_Store' \
  --exclude='dist' \
  --exclude='build' \
  "$SOURCE_DIR/" "$OUTPUT_DIR/"

cd "$OUTPUT_DIR"

git init -b main >/dev/null 2>&1 || { git init >/dev/null 2>&1; git checkout -b main >/dev/null 2>&1 || true; }

if [[ ! -f .gitignore ]]; then
  cat > .gitignore <<'GITIGNORE'
node_modules/
.expo/
dist/
build/
GITIGNORE
fi

git add .
git commit -m "Initial standalone import" >/dev/null 2>&1 || true

echo "✅ Standalone project created at: $OUTPUT_DIR"
echo "✅ New independent git history initialized."
