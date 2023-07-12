#!/bin/bash
sed -i "" "s/nodept/$1/g" package.json
sed -i "" "s/nodept/$1/g" package-lock.json
sed -i "" "s/nodept/$1/g" README.md
rm -rf .git
git init
git add .
git commit -m 'init'
