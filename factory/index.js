var Account = require("./lib/Account");

var teacher1 = Account({type: 'teacher', firstName: 'Aaron'});
var student1 = Account({type: 'student', firstName: 'Ana'});

console.log(teacher1.getAccount());
console.log(student1.getAccount());
