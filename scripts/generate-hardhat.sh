#!/bin/bash

mkdir $1
cd $1

npm init -y

mkdir artifacts
mkdir build
mkdir cache
mkdir contracts
mkdir scripts
mkdir tests

touch .mocharc.json
printf "{\n \t\"require\": \"hardhat/register\",\n \t\"timeout\": 20000\n}" > .mocharc.json
touch hardhat.config.js

touch .env

npm i -D @nomiclabs/hardhat-ethers @nomiclabs/hardhat-waffle @openzeppelin/hardhat-upgrades \
  dotenv ethereum-waffle ethers hardhat hardhat-contract-sizer solidity-coverage