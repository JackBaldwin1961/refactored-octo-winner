export class BankAccount {
    constructor(accountNumber, accountHolderName, balance) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log('${this.accountHolderName} deposited £${amount} ');
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log('Insufficient funds for ${this.accountHolderName} to withdraw £${amount} ');
        } else {
            this.balance -= amount;
            console.log('${this.accountHolderName} withdrew £${amount} ');
        }
    }
}

checkBalance() {
    console.log('${this.accountHolderName} has a balance of £${this.balance} ');
}