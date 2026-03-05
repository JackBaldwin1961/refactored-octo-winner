export class BankAccount {
    constructor(accountNumber, accountHolderName, balance) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log('${this.accountHolder} deposited £${amount} ');
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log('Insufficient funds for ${this.accountHolder}');
        } else {
            this.balance -= amount;
            console.log('${this.accountHolder} withdrew £${amount} ');
        }
    }
}

checkBalance() {
    console.log('${this.accountHolder} has a balance of £${this.balance} ');
}