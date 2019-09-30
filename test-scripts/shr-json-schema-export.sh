#!/bin/bash
CHANGES=$(git --no-pager diff --name-only HEAD $(git merge-base HEAD master))

SHR_JSON_SCHEMA_EXPORT=$(echo $CHANGES | tr ' ' '\n' | grep shr-json-schema-export)
if [ ! -z "$SHR_JSON_SCHEMA_EXPORT" ]; then
    cd packages/shr-json-schema-export
    yarn test
    if [ $? != 0 ]; then exit 1; fi
    cd ../..
fi