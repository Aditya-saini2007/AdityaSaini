//bank managment app 
function createBank(bankName,bankCode,bankAddress,bankBranches,helpline,numOfATM){
    this.bankName = bankName
    this.bankCode = bankCode
    this.bankAddress = bankAddress
    this.bankBranches = bankBranches
    this.listOfUsers = []
    this.helpline = helpline;
    this.numOfATM = numOfATM;
    this.userCount = 0
    this.addUser = function (userName,userRole,email,phone,dob,gender,address,Balance){
        userAccountNo = Date.now();
        userId = ++this.userCount;
        let user = new CreateBankUsers(userName, userId, userRole, email, phone, dob, gender, address, userAccountNo,Balance);
        this.listOfUsers.push(user);
    }
    this.userBalance = function(){
        let data = this.listOfUsers.find(user=>user.userId === userId)
        if(!data){
            return `Account not Fount`
        }
        return `${data.userName} Account has this available balance ${data.Balance}`
    }
    this.userDeposit = function(userId) {
        let data = this.listOfUsers.find(user=>user.userId === userId)
        if(!data){
                 return `Account not Fount`
        }
        data.Balance+= amount;
        return `Credited ${amount},Total Balance ${data.balance}`
    }
    this.totalBalanceInBank = function() {
        let total = 0;
        for(let user of this.listOfUsers)
            total += user.Balance
        return`total bank balance is ${total}`
    }
    this.userStatus = function() {
        
    }
    this.userWithdrawl = function(){
        let data = this.listOfUsers.find(user=>user.userId === userId)
        if(!data){
                 return `Account not Fount`
        }
        if(data.Balance > amount){
            return`remaining amount is ${data.balance - amount}and you`
        }
        if(data.Balance < amount){
            return`insufficient Balance`
        }
    }
}
function CreateBankUsers(userName,userId,userRole,email,phone,dob,gender,address,userAccountNo,Balance){
    this.userName = userName
    this.userId = userId
    this.userRole = userRole
    this.email = email;
    this.phone = phone;
    this.dob = dob;
    this.gender = gender;
    this.address = address;
    this.userAccountNo = userAccountNo;
    this.Balance = Balance;
}
 const AdityaBank = new createBank("AdityaBank","AB2464213","Mundka","MN","7896321456",0);
 AdityaBank.addUser("Aditya Saini","Customer","adboi671@gmail.com",7896541230,"02/03/2007","Male","ghar me",100)
console.log(AdityaBank.userBalance(1));
console.log(AdityaBank);




