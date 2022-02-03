//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

contract ERC20Basic {
  string public constant name = "ERC20Basic";
  string public constant symbol = "BSC";
  uint8 public constant decimals = 18;

  event Approval(address indexed tokenOwner, address indexed spender, uint tokens);
  event Transfer(address indexed from, address indexed to, uint tokens);

  mapping(address => uint256) balances;
  mapping(address => mapping (address => uint256)) allowed;
  uint256 totalSupply_;

  // https://ethereum.stackexchange.com/questions/25829/meaning-of-using-safemath-for-uint256/25831
  // The directive using A for B can be used to attach library functions (from the library A to any type B)
  // These functions will receive the object they are called on as their first parameter
  using SafeMath for uint256;

  constructor(uint256 total) public {
    totalSupply_ = total;
    balances[msg.sender] = totalSupply_;
  }

  function totalSupply() public view returns (uint256) {
    return totalSupply_;
  }

  function balanceOf(address tokenOwner) public view returns (uint) {
    return balances[tokenOwner];
  }

  // Transfer tokens from sender to receiver
  function transfer(address receiver, uint numTokens) public returns (bool) {
    require(numTokens <= balances[msg.sender], "Balance is not sufficient.");
    balances[msg.sender] = balances[msg.sender].sub(numTokens);
    balances[receiver] = balances[receiver].add(numTokens);
    emit Transfer(msg.sender, receiver, numTokens);
    return true;
  }

  function approve(address delegate, uint numTokens) public returns (bool) {
    allowed[msg.sender][delegate] = numTokens;
    emit Approval(msg.sender, delegate, numTokens);
    return true;
  }

  function allowance(address owner, address delegate) public view returns (uint) {
    return allowed[owner][delegate];
  }

  function transferFrom(address owner, address buyer, uint numTokens) public returns (bool) {
    require(numTokens <= balances[owner], "");
    require(numTokens <= allowed[owner][msg.sender], "");

    balances[owner] = balances[owner].sub(numTokens);
    allowed[owner][msg.sender] = allowed[owner][msg.sender].sub(numTokens);
    balances[buyer] = balances[buyer].add(numTokens);
    emit Transfer(owner, buyer, numTokens);
    return true;
  }
}

library SafeMath {
  function sub(uint256 a, uint256 b) internal pure returns (uint256) {
    assert(b <= a);
    return a - b;
  }

  function add(uint256 a, uint256 b) internal pure returns (uint256) {
    uint256 c = a + b;
    assert(c >= a);
    return c;
  }
}