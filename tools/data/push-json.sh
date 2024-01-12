#!/bin/bash

file="data.json"

if ([ "$1" != "testing" ] && [ "$1" != "production" ]); then
    echo "Usage: ./push-json.sh <testing|production>"
    exit 1
fi

source .env

if [ "$PANTRY_ID" == "" ]; then
    echo "No Pantry information found."
    exit 1
fi

if [ "$1" == "testing" ]; then
    PANTRY_BASKET+="_testing"
fi
echo "Basket $PANTRY_BASKET"

curl -XPOST -H "Content-type: application/json" -d @$file "https://getpantry.cloud/apiv1/pantry/$PANTRY_ID/basket/$PANTRY_BASKET"
