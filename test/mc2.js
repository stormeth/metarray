var MetaArray = artifacts.require("./MetaArray.sol");

contract('Mc2 Dynamic', function(accounts) {

    it("setup the data inside the user struct", function() {
        var meta;

        var amount = 10;
        var xamount;

        return MetaArray.deployed().then(function(instance) {
            meta = instance;
            return meta.setUserd("keith", amount, true);
        }).then(function() {
            xamount = amount + 5;
            return meta.setUserd("peter", xamount, false);
        }).then(function() {
            xamount = xamount + 5;
            return meta.setUserd("stu", xamount, false);
//        });

        }).then(function() {

            return meta.getUserdHungry.call(0);
        }).then(function(hungry) {
            assert.equal(hungry, true, "Keith should be hungry");
            console.log("keith hungry = ", hungry);
            return meta.getUserdHungry.call(1);
        }).then(function(hungry) {
            assert.equal(hungry, false, "peter should not be hungry");
            return meta.getUserdHungry.call(2);
        }).then(function(hungry) {
            assert.equal(hungry, false, "stu should not be hungry");
        });

    });

    it("test hungry", function() {
        var meta;

        return MetaArray.deployed().then(function(instance) {
            meta = instance;
            return meta.getUserdHungry.call(0);
        }).then(function(hungry) {
            assert.equal(hungry, true, "Keith should be hungry");
            console.log("keith hungry = ", hungry);
            return meta.getUserdHungry.call(1);
        }).then(function(hungry) {
            assert.equal(hungry, false, "peter should not be hungry");
            return meta.getUserdHungry.call(2);
        }).then(function(hungry) {
            assert.equal(hungry, false, "stu should not be hungry");
        });
    });

    it("test names", function() {
        var meta;

        return MetaArray.deployed().then(function(instance) {
            meta = instance;
            return meta.getUserdName.call(0);
        }).then(function(name) {
            assert.equal(name, "keith", "Keith should be the name");
            console.log("keith name = ", name);
            return meta.getUserdName.call(1);
        }).then(function(name) {
            assert.equal(name, "peter", "peter should be the name");
            return meta.getUserdName.call(2);
        }).then(function(name) {
            assert.equal(name, "stu", "stu should be the name");
        });
    });

    it("test amounts", function() {
        var meta;

        var myamt;

        return MetaArray.deployed().then(function(instance) {
            meta = instance;
            return meta.getUserdAmount.call(0);
        }).then(function(amt) {
            myamt = amt.toNumber();
            assert.equal(myamt, 10, "Keith amount should be 10");
            console.log("keith amount = ", amt);
            return meta.getUserdAmount.call(1);
        }).then(function(amt) {
            myamt = amt.toNumber();
            assert.equal(myamt, 15, "peter amount shoudl be 15");
            return meta.getUserdAmount.call(2);
        }).then(function(amt) {
            myamt = amt.toNumber();
            assert.equal(myamt, 20, "stu amount should be 20");
        });
    });

});
