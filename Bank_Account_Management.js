let accounts = [];

class BankAccount{
    constructor(accountNumber, initialBalance) {
        if(!accountNumber.startsWith("IN")  && accountNumber.length !== 12) {
            throw new console.error(' A string that must start with "IN" and be exactly 12 characters long.');
        }
        this.accountNumber = accountNumber;
        this.initialBalance = initialBalance;
    }

    deposit(amount) {
        if(amount>0) {
            this.initialBalance+=amount;
            console.log(`You have deposited the amount RS ${amount} and the balance is RS ${this.initialBalance} `);
        } else {
            console.log("Please Enter a Valid Amount");
            
        }
    }

    withdraw(amount) {
        if(amount>this.initialBalance) {
            console.log(`You don't have that much Amount in your bank`);
        } else {
            this.initialBalance-=amount
            console.log(`You have withdrawed the Amount RS ${amount}  and You balance is RS ${this.initialBalance}`);
        }
    }

    transfer(amount, targetAccountNumber) {
        if(amount>=0) {
            accounts.forEach((item)=>{
                if(targetAccountNumber === item.accountNumber ) {
                    this.initialBalance-=amount
                    item.initialBalance+=amount
                }
            })
            
            // this.initialBalance-=amount;
            // this.initialBalance+= amount;
            console.log(`You have Transfered the Amount of RS ${amount} to RS ${targetAccountNumber}`);
            console.log(`Now Your Balance is RS ${this.initialBalance} `);
            
            
        } else {
            console.log(`Transaction Failed...Please Try Again`);
            
        }
    }
}

// const accountHolder1 = new BankAccount("IN9381398490",500)
// const accountHolder2 = new BankAccount("IN9502371445",1000)

// accountHolder1.deposit(5000)
// accountHolder1.withdraw(500)
// accountHolder1.transfer(100, accountHolder2)
// console.log(accountHolder2.initialBalance)


function createAccount(accountNumber, initialAmount) {
    if(accountNumber.startsWith("IN") && accountNumber.length === 12 && initialAmount >= 1000) {
        
        const accountHolders = new BankAccount(accountNumber,initialAmount)
        accounts.push(accountHolders)
        console.log("successfully created",accountHolders);
        
    } else{
        console.log("The Minimum initial Balance Should be 1000 RS");
        
    }
}

createAccount("IN9381398490",1900)
createAccount("IN9502571445",5000)
accounts[0].transfer(0,"IN9502571445")
console.log(accounts);

