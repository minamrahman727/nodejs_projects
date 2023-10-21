class Account {
    private accountNumber: string;
    protected balance: number;

    constructor(accountNumber: string, initialBalance: number) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }

    getAccountNumber(): string {
        return this.accountNumber;
    }

    getBalance(): number {
        return this.balance;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): boolean {
        if (amount <= this.balance) {
            this.balance -= amount;
            return true;
        }
        return false;
    }
}

class SavingsAccount extends Account {
    private interestRate: number;

    constructor(accountNumber: string, initialBalance: number, interestRate: number) {
        super(accountNumber, initialBalance);
        this.interestRate = interestRate;
    }

    applyInterest(): void {
        const interest = this.balance * (this.interestRate / 100);
        this.deposit(interest);
    }
}

class CheckingAccount extends Account {
    private overdraftLimit: number;

    constructor(accountNumber: string, initialBalance: number, overdraftLimit: number) {
        super(accountNumber, initialBalance);
        this.overdraftLimit = overdraftLimit;
    }

    withdraw(amount: number): boolean {
        if (amount <= this.balance + this.overdraftLimit) {
            this.balance -= amount;
            return true;
        }
        return false;
    }
}

// Example Usage
const savingsAccount = new SavingsAccount("SA123", 1000000, 2.5);
savingsAccount.deposit(500);
savingsAccount.applyInterest();

const checkingAccount = new CheckingAccount("CA456", 2000, 500);
checkingAccount.withdraw(2500);

console.log(`Savings Account Balance: $${savingsAccount.getBalance()}`);
console.log(`Checking Account Balance: $${checkingAccount.getBalance()}`);
