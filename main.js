import inquirer from "inquirer";
const userInput = await inquirer.prompt([
    {
        type: "number",
        name: "userId",
        message: "Enter Your Id"
    },
    {
        type: "number",
        name: "UserPin",
        message: "Enter Your pin"
    },
    {
        type: "list",
        name: "accountType",
        choices: ["saving", "current"],
        message: "Select your Account Type"
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Cash WithDraw", "Balance Inquiry", "Fast Cash"],
        message: "Enter Your transaction"
    },
    {
        type: "number",
        name: "amount",
        message: "Enter Your Amount",
        when(userInput) {
            return userInput.transactionType === "Cash WithDraw";
        }
    },
    {
        type: "list",
        name: "Amount",
        choices: [1000, 2000, 5000, 10000, 20000, 25000],
        message: "Select Your Amount to withdraw",
        when(userInput) {
            return userInput.transactionType === "Fast Cash";
        }
    },
]);
const userId = userInput.userId;
const UserPin = userInput.UserPin;
const enteredAmount = userInput.amount;
if ((userId && UserPin) && userInput.transactionType === "Balance Inquiry") {
    const UserBalance = Math.floor(Math.random() * 100000);
    console.log(`Your current  balance is Rs ${UserBalance} `);
}
else if (userId && UserPin) {
    const UserBalance2 = Math.floor(Math.random() * 10000);
    if (UserBalance2 > enteredAmount) {
        console.log(`Your account has been debited with rs ${enteredAmount} and your remaining balance is Rs ${UserBalance2 - enteredAmount} `);
    }
    else {
        console.log(`Unsufficient Balance `);
    }
}
;
