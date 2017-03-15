pragma solidity ^0.4.4;

contract MetaArray {

	struct User {
		string name;
		uint amount;
		bool hungry;
	}

	User[3] public users;
	uint public useridx;

	function setUser(uint myidx, string name, uint amount, bool hungry) {
		users[myidx] = User(name,amount,hungry);
		//incrementUserIndex();
	}

	function incrementUserIndex() {
		useridx = useridx + 1;
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
