#!/bin/bash
set -x
set -e

## Change into this script's folder
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $DIR

node ./update-readme.js

git --version
git config --global user.email "travis@travis-ci.org"
git config --global user.name "Travis CI"
git checkout -b next
git add ../README.md
git commit --message "Travis build: $TRAVIS_BUILD_NUMBER"
git remote add origin-next https://${GH_TOKEN}@github.com/anishkny/realworld.git
git push --quiet --set-upstream origin-next next
