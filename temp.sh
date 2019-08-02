#!/bin/bash

# parse arg
REPO_NAME=$1

brig project get $REPO_NAME -n connectorsui01 > $REPO_NAME.json && exs e $REPO_NAME.json $REPO_NAME.yaml && rm $REPO_NAME.json