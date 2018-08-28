#!/usr/bin/env bash

# Usage: ./scripts/thread-json.sh [board] [thread number] [output file]

if [ -z $1 ]; then
  echo "Please provide a board"
  exit 1
fi

if [ -z $2 ]; then
  echo "Please provide a thread number"
  exit 1
fi

if [ -z $3 ]; then
  echo "Please specify an output filename"
  exit 1
fi

echo "Getting JSON data from thread $2 on /$1/..."
curl "https://a.4cdn.org/$1/thread/$2.json" 2> /dev/null | jq '.' > "./test/data/$3"
echo "Done! Yay! :3"
