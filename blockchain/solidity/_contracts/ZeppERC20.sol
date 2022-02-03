//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ZeppERC20 is ERC20 {
  constructor() ERC20("Vi Token 1", "VIT1") {
  }
}
