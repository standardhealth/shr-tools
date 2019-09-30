#!/bin/bash
CHANGES=$(git --no-pager diff --name-only HEAD $(git merge-base HEAD master))

SHR_EXPAND=$(echo $CHANGES | tr ' ' '\n' | grep shr-expand)
if [ ! -z "$SHR_EXPAND" ]; then
    cd packages/shr-expand
    yarn test
    if [ $? != 0 ]; then exit 1; fi
    cd ../..
fi