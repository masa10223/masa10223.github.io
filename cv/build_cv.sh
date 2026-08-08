#!/usr/bin/env bash
# Rebuild the English CV PDF and place it where Hugo serves static files.
set -euo pipefail
cd "$(dirname "$0")"
xelatex -interaction=nonstopmode Masato_Tsutsumi_CV.tex
mkdir -p ../static/uploads
cp -f Masato_Tsutsumi_CV.pdf ../static/uploads/Masato_Tsutsumi_CV.pdf
cp -f Masato_Tsutsumi_CV.pdf ../uploads/Masato_Tsutsumi_CV.pdf
rm -f Masato_Tsutsumi_CV.aux Masato_Tsutsumi_CV.log Masato_Tsutsumi_CV.out
echo "Updated: static/uploads/Masato_Tsutsumi_CV.pdf"
