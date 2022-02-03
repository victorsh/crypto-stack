//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

contract Proxy {
  address contract_addr = '';
  fallback() external payable {
    address implementation = sload(contract_addr);
    implementation.delegateCall.value(msg.value)(msg.data);
  }
}

contract TransparentAdminUpgradeableProxy {
  address implementation;
  address admin;

  fallback() external payable {
    require(msg.sender != admin, 'Admin cannot call fallback function.');
    implementation.delegateCall.value(msg.value)(msg.data);
  }

  function upgrade(address newImplementation) external {
    if (msg.sender != admin) fallback();
    implementation = newImplementation;
  }
}