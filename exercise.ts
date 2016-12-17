type Account = {
    money: number,
    deposit: (value: number) => void
};

type Individual = {
    name: string,
    bankAccount: Account,
    hobbies: string[]
};

let bankAccount: Account = {
    money: 2000,
    deposit(value: number): void {
        this.money += value;
    }
};

let myself: Individual = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);

