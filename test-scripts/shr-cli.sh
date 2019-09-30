#!/bin/bash
CHANGES=$(git --no-pager diff --name-only HEAD $(git merge-base HEAD master))

SHR_CLI=$(echo $CHANGES | tr ' ' '\n' | grep shr-cli)
if [ ! -z "$SHR_CLI" ]; then
    cd packages/shr-cli
    git clone https://github.com/standardhealth/shr-spec.git
    git -C ./shr-spec checkout dev6
    node . shr-spec/spec > run.log
    ERRORS=$(grep "errors" run.log | sed $'s,\x1b\\[[0-9;]*[a-zA-Z],,g')
    if [[ "$ERRORS" != "0 errors" ]]; then 
        ( echo There were errors in running shr-cli)
        exit 1
    fi
    cd ../..
fi