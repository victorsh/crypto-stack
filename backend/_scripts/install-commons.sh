#!/bin/bash

cd ../
cd calculator
rm -rf package-lock.json
npm i

cd ../
cd collector
rm -rf package-lock.json
npm i

cd ../
cd t-bot
rm -rf package-lock.json
npm i