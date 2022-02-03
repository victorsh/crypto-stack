//SPDX-License-Identifier: Unlicense
pragma solidity =0.8.4;

contract Trust {
    struct Kid {
        uint amount;
        uint maturity;
        bool paid;
    }
    mapping(address => Kid) public kids;
    address public parent;
    
    constructor() {
        parent = msg.sender;
    }
    
    function addKid(address kid, uint timeToMaturity) external payable {
        require(msg.sender == parent, 'only admin');
        require(msg.value > 0, 'Payment must be greater than 0.');
        require(kids[msg.sender].amount == 0, 'Kid already exists');
        kids[kid] = Kid(msg.value, block.timestamp + timeToMaturity, false);
    }
    
    function withdraw() external {
        Kid storage kid = kids[msg.sender];
        
        require(kid.maturity <= block.timestamp, 'too early');
        // Use amounts[kid] > 0 to check if that address exists.
        require(kid.amount > 0, 'Only a preset address can withdraw');
        // 0.8 update, 2 types of addresses, address and address payable. Can only send eth to payable.
        require(kid.paid == false, 'paid already');
        kid.paid = true;
        payable(msg.sender).transfer(kid.amount);
    }
}