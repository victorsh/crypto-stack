//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

contract Token {
    mapping(address => uint) balances;

    // Address of owner to address of spender to spending amount
    mapping(address => mapping(address => uint)) public allowance;

    uint public totalSupply = 10000;
    string public name = "Vic Token";
    string public symbol = "VTN";
    uint public decimals = 18;

    // Q What does the "indexed" keyword do in the below line of code? I'm guessing it just tells the event object that the following input should be logged?
    // The indexed parameters for logged events will allow you to search for these events using the indexed parameters as filters.

    // Q Can we use it other places ie outside of events?
    // The indexed keyword is only relevant to logged events.
    event Transfer(address indexed from, address indexed to, uint amount);
    event Approval(address indexed owner, address indexed spender, uint amount);

    constructor() {
        balances[msg.sender] = totalSupply;
    }

    function balanceOf(address owner) public view returns (uint) {
        return balances[owner];
    }

    function transfer(address to, uint amount) public returns (bool) {
        require(balanceOf(msg.sender) >= amount, "INSUFFICIENT BALANCE");
        balances[to] += amount;
        balances[msg.sender] -= amount;
        emit Transfer(msg.sender, to, amount);
        return true;
    }

    function approve(address spender, uint amount) public returns (bool) {
        allowance[msg.sender][spender] = amount;
        emit Approval(msg.sender, spender, amount);
        return true;
    }

    function transferFrom(address from, address to, uint amount) public returns (bool) {
        require(balanceOf(from) >= amount, 'INSUFFICIENT BALANCE');
        require(allowance[msg.sender][from] >= amount, 'INSUFFICIENT ALLOWANCE');
        balances[to] += amount;
        balances[from] -= amount;
        emit Transfer(from, to, amount);
        return true;
    }
}
