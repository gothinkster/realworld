#!/bin/bash
set -x
set -e

node ./update-readme.js

export BRANCH_NAME=updated-readme
git --version
git config --global user.email "no-reply@realworld.io"
git config --global user.name "RealWord Bot"
git branch -d $BRANCH_NAME || true
git checkout -b $BRANCH_NAME
git add ../README.md
git commit --message "Auto-update README" || exit 0
git remote add origin-$BRANCH_NAME https://${GH_TOKEN}@github.com/${GH_REPO}.git
git push --force --quiet --set-upstream origin-$BRANCH_NAME $BRANCH_NAME
