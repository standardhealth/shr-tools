#!/bin/bash
CHANGES=$(git --no-pager diff --name-only HEAD $(git merge-base HEAD master))

SHR_MODELS=$(echo $CHANGES | tr ' ' '\n' | grep shr-models)
if [ ! -z "$SHR_MODELS" ]; then
    cd packages/shr-models
    yarn test
    if [ $? != 0 ]; then exit 1; fi
    cd ../..
fi