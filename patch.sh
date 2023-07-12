#!/bin/bash
git add .
git commit -m 'patch ready'
git push
npm version patch
npm run build
npm publish --access public
