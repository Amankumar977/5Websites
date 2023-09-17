class BankAccount {
  #name;
  #balance;
  constructor(name, balance) {
    this.#name = name;
    this.#balance = balance;
  }
  checkBalance() {
    console.log(`Account balance for ${this.#name} : ${this.#balance}`);
  }
  deposit(amount) {
    if (amount < 0) {
      console.log(`Invalid deposit amount. Please enter a positive amount.`);
    } else {
      this.#balance += amount;
      console.log(
        `Deposited Rs. ${amount}. New balance : Rs. ${this.#balance}`
      );
    }
  }
  withdraw(amount) {
    if (amount < 0) {
      console.log(`Invalid deposit amount. Please enter a positive amount.`);
    } else if (amount > this.#balance) {
      console.log(`Insufficient funds for withdrawal`);
    } else {
      this.#balance -= amount;
      console.log(
        `withdrawn Rs. ${amount}. New balance : Rs. ${this.#balance}`
      );
    }
  }
}

const myAccount = new BankAccount("Aman", 1000);
myAccount.checkBalance();
myAccount.deposit(500);
myAccount.deposit(-50);
myAccount.withdraw(200);
myAccount.withdraw(1500);
myAccount.withdraw(-500);
myAccount.checkBalance();
