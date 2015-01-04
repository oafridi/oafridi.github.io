#!/bin/bash
dt=$(date +"%Y-%m-%d")

echo "Please enter blog title with a hyphen in between words. i.e. my-blog"
read TITLE

touch _posts/"$dt-$TITLE.md"
