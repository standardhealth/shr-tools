#!/bin/bash
CHANGES=$(git --no-pager diff --name-only HEAD $(git merge-base HEAD master))

SHR_FHIR_EXPORT=$(echo $CHANGES | tr ' ' '\n' | grep shr-fhir-export)
if [ ! -z "$SHR_FHIR_EXPORT" ]; then
    cd packages/shr-fhir-export
    yarn test
    if [ $? != 0 ]; then exit 1; fi
    cd ../..
fi