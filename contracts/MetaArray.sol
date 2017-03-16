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
	User[] public usersdynamic;

	function setUserDynamic(string name, uint amount, bool hungry) {
		usersdynamic.push(User(name,amount,hungry));
	}

	function setUser(uint myidx, string name, uint amount, bool hungry) {
		users[myidx] = User(name,amount,hungry);
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
}
