// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

// This contract does not have a constructor so that the state is not stored in the implementation
// We want the data stored in the proxy
contract Box {
  uint private value;

  event ValueChanged(uint newValue);

  function store(uint newValue) public {
    value = newValue;
    emit ValueChanged(newValue);
  }

  function retrieve() public view returns (uint) {
    return value;
  }

  function paySomething() public payable returns (uint) {
    uint addrBal = address(this).balance;
    return addrBal;
  }
}