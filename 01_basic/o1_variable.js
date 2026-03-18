//Prefer not to use var
//beacuse of issue in block scope and functional scope

const accountId = 12345
let accountEmail = 'ritik@gmail.com';
var accountPassword = "432"
accountCity = "jaipur"
let accountState;

//accountId = 4 //Assignment to constant variable.
console.debug(accountId)
accountEmail= "aha@.com"
accountPassword= '987'
accountCity = "mau"
console.table([accountEmail,accountId,accountPassword,accountCity,accountState])