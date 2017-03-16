pragma solidity ^0.4.4;

contract MetaArray {

	struct User {
		string name;
		uint amount;
		bool hungry;
	}

//  This is the static way
    User[3] public users;
//  This is the dynamic way
	User[] public usersd;

	function setUser(uint myidx, string name, uint amount, bool hungry) {
		users[myidx] = User(name,amount,hungry);
	}

	function setUserd(string name, uint amount, bool hungry) {
		usersd.push(User(name,amount,hungry));
	}

	function getUserHungry(uint index) returns(bool) {
		bool hungry = users[index].hungry;
		return hungry;
	}

	function getUserName(uint index) returns(string) {
	 	string name = users[index].name;
		return name;
	}

	function getUserAmount(uint index) returns(uint) {
	 	uint amount = users[index].amount;
		return amount;
	}

	function getUserdHungry(uint index) returns(bool) {
		bool hungry = usersd[index].hungry;
		return hungry;
	}

	function getUserdName(uint index) returns(string) {
	 	string name = usersd[index].name;
		return name;
	}

	function getUserdAmount(uint index) returns(uint) {
	 	uint amount = usersd[index].amount;
		return amount;
	}
}
