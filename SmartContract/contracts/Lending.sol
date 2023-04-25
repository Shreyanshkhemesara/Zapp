// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Lending is Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private B_ID_Counter;
    
    struct Borrower{
        address payable B_address;
        uint256 amount;
        bool hasRecieved;
    }

    event _Borrow(uint256 indexed B_id, address indexed B_address, uint256 indexed _amount);
    event _lend(uint256 indexed B_id, address indexed L_address);

    //mapping from B_ID to Borrower
    mapping(uint256 => Borrower) public B_data;
    
    function borrow(address payable _address, uint256 _amount) public{
        B_data[B_ID_Counter.current()] = Borrower(_address, _amount, false);
        emit _Borrow(B_ID_Counter.current(), _address, _amount);
        B_ID_Counter.increment();
    }

    function lend(uint256 B_ID) external payable returns(bool){
        require(msg.sender != B_data[B_ID].B_address, "Lender and borrower cant be same.");
        require(!B_data[B_ID].hasRecieved,"Borrow's request has already been fulfilled !!" );
        require(msg.value == B_data[B_ID].amount ,"Pay Exact Value");
        B_data[B_ID].B_address.transfer(msg.value);
        B_data[B_ID].hasRecieved = true;
        emit _lend(B_ID, msg.sender);
        return true;
    }

    function CurrentBid() external view returns(uint256){
        return (B_ID_Counter.current()-1);
    }
    
}