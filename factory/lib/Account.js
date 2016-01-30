function Account(id, type, firstName){
    this.id = id;
    this.type = type;
    this.firstName = firstName;
}

Account.prototype.getAccount = function() {
    return this;
}

module.exports = function(account){
    if(!account.type){
        throw new Error("Account type required");
    }

    switch(account.type){
        case "teacher":
            return new Account(
                "TEACHER-" + new Date(),
                account.type,
                account.firstName 
            );
            break;
        case "student":
            return new Account(
                "STUDENT-" + new Date(),
                account.type,
                account.firstName
            );
            break;
        default:
            throw new Error("Account type " + account.type  + " doesn't exists.");
            break;
    }
};
