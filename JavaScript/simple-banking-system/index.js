import { BankAccount } from "./bankaccount";

// Create a new bank account
const account1 = new BankAccount("123456789", "Jack Quinn", 1000);
const account2 = new BankAccount("987654321", "Jane Doe", 500);

// test the deposit method
account1.deposit(200);

// test the withdraw method
account1.withdraw(150);
account2.withdraw(600);

// test the checkBalance method
account1.checkBalance();
account2.checkBalance();