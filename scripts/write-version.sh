#!/bin/sh
set -eu

REPO_ROOT=$(CDPATH= cd -- "$(dirname "$0")/.." && pwd)
VERSION_FILE="$REPO_ROOT/scripts/version.js"
VERSION=$(date '+v%Y.%m.%d-%H%M')

printf "window.APP_VERSION = '%s';\n" "$VERSION" > "$VERSION_FILE"
