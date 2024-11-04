const accountId = 1234
let accountEmail = 'abc@abc.com'
var accountPwd = 'hello'

accountCity = 'Kolhapur'

// cant change const value, as name suggests it is constant now

// accountId = 34
// console.log(accountId);

// If we dont give any value to any variable, then it is "undefined"
let accountState;
console.table([accountId, accountEmail, accountPwd, accountCity, accountState]);

accountEmail = 'bde@bde.com'
console.log(accountEmail);

/*
var keyword has a problem with scope, change one and all will change
prefer not to use var
let removes this problem of scope which is in var
*/