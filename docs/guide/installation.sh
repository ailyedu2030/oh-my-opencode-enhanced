#!/bin/bash
set -e

INSTALL_URL="https://opencode.ai"
REPO="ailyedu2030/oh-my-opencode-enhanced"

echo "=============================================="
echo "  Oh-My-OpenCode Enhanced - Installation"
echo "=============================================="
echo ""

check_command() {
  if ! command -v "$1" &> /dev/null; then
    echo "Error: '$1' is required but not installed."
    echo "Please install it first:"
    echo "  $2"
    exit 1
  fi
}

echo "[1/4] Checking prerequisites..."
check_command "bun" "Visit https://bun.sh for installation"
check_command "opencode" "Visit $INSTALL_URL for installation"

echo ""
echo "[2/4] Installing oh-my-opencode-enhanced plugin..."
bunx --yes "$REPO" install --no-tui

echo ""
echo "[3/4] Verifying installation..."
if [ -f ~/.config/opencode/oh-my-opencode.jsonc ] || [ -f .opencode/oh-my-opencode.jsonc ]; then
  echo "  Plugin configuration found."
else
  echo "  Warning: Configuration file not found."
fi

echo ""
echo "[4/4] Checking OpenCode version..."
opencode --version 2>/dev/null || echo "  Could not determine version."

echo ""
echo "=============================================="
echo "  Installation Complete!"
echo "=============================================="
echo ""
echo "The plugin is configured to use the following models:"
echo "  - MiniMax M2.7 (primary)"
echo "  - Qwen3.6 Plus Free (secondary)"
echo "  - MiniMax M2.5 Free (tertiary)"
echo "  - Big Pickle (fallback)"
echo ""
echo "Get started:"
echo "  opencode"
echo ""
echo "=============================================="
