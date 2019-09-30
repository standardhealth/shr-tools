#!/bin/bash
CHANGES=$(git --no-pager diff --name-only HEAD $(git merge-base HEAD master))

SHR_ES6_EXPORT=$(echo $CHANGES | tr ' ' '\n' | grep shr-es6-export)
if [ ! -z "$SHR_ES6_EXPORT" ]; then
    cd packages/shr-es6-export
    yarn test
    if [ $? != 0 ]; then exit 1; fi
    cd ../..
fi