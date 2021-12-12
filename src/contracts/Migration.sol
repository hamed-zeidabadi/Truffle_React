pragma solidity ^0.8.0;

contract Migration {
    address public owner;
    uint256 public last_copleted;

    constructor()  {
        owner = msg.sender;
    }

    modifier isOwner() {
        if (msg.sender == owner) _;
    }

    function set_complete(uint256 copleted) public isOwner {
        last_copleted = copleted;
    }
}
