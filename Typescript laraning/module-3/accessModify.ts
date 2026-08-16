class BankAccount {
  readonly userId: number;
  name: string;
  private userBalance: number; // protected have

  constructor(userId: number, name: string, userBalance: number) {
    this.userId = userId;
    this.name = name
    this.userBalance = userBalance;
  }

  addBalance(balance: number) {
    this.userBalance = this.userBalance + balance
  }
}

const myAccount = new BankAccount(12123, "Mohyet", 200)

myAccount.addBalance(30000)
console.log(myAccount)