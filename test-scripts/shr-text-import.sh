#!/bin/bash
CHANGES=$(git --no-pager diff --name-only HEAD $(git merge-base HEAD master))

SHR_TEXT_IMPORT=$(echo $CHANGES | tr ' ' '\n' | grep shr-text-import)
if [ ! -z "$SHR_TEXT_IMPORT" ]; then
    cd packages/shr-text-import
    yarn test
    if [ $? != 0 ]; then exit 1; fi
    cd ../..
fi