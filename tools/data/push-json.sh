#!/bin/bash

file="data.json"

source .env

if [ "$PANTRY_ID" == "" ]; then
    echo "No Pantry information found."
    exit 1
fi

curl -XPOST -H "Content-type: application/json" -d @$file "https://getpantry.cloud/apiv1/pantry/$PANTRY_ID/basket/$PANTRY_BASKET"