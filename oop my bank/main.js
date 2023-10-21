var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(accountNumber, initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }
    Account.prototype.getAccountNumber = function () {
        return this.accountNumber;
    };
    Account.prototype.getBalance = function () {
        return this.balance;
    };
    Account.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    Account.prototype.withdraw = function (amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            return true;
        }
        return false;
    };
    return Account;
}());
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(accountNumber, initialBalance, interestRate) {
        var _this = _super.call(this, accountNumber, initialBalance) || this;
        _this.interestRate = interestRate;
        return _this;
    }
    SavingsAccount.prototype.applyInterest = function () {
        var interest = this.balance * (this.interestRate / 100);
        this.deposit(interest);
    };
    return SavingsAccount;
}(Account));
var CheckingAccount = /** @class */ (function (_super) {
    __extends(CheckingAccount, _super);
    function CheckingAccount(accountNumber, initialBalance, overdraftLimit) {
        var _this = _super.call(this, accountNumber, initialBalance) || this;
        _this.overdraftLimit = overdraftLimit;
        return _this;
    }
    CheckingAccount.prototype.withdraw = function (amount) {
        if (amount <= this.balance + this.overdraftLimit) {
            this.balance -= amount;
            return true;
        }
        return false;
    };
    return CheckingAccount;
}(Account));
// Example Usage
var savingsAccount = new SavingsAccount("SA123", 1000000, 2.5);
savingsAccount.deposit(500);
savingsAccount.applyInterest();
var checkingAccount = new CheckingAccount("CA456", 2000, 500);
checkingAccount.withdraw(2500);
console.log("Savings Account Balance: $".concat(savingsAccount.getBalance()));
console.log("Checking Account Balance: $".concat(checkingAccount.getBalance()));
