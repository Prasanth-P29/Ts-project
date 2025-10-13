type Loan = {
  loanId: number;
  accName: string;
  amount: number;
  type: "Home" | "Personal" | "Car";
  overDue: boolean
};

let loans: Loan[] = [
  {loanId: 101, accName: "Prasanth", amount: 1000000, type: "Home", overDue: false},
  {loanId: 102, accName: "Suganthan", amount: 400000, type: "Car", overDue: true},
  {loanId: 103, accName: "Rahul", amount: 2000000, type: "Home", overDue: false},
  {loanId: 104, accName: "Anas", amount: 500000, type: "Personal", overDue: true},
  {loanId: 105, accName: "Asraf", amount: 300000, type: "Personal", overDue: false}
];

//Group loan amount by type
let loanSummary = loans.reduce((acc,l) => {
  acc[l.type] = (acc[l.type] || 0) + l.amount;
  return acc;
}, {} as Record<string, number>); // for first iteration it will be {Home: 100000}

//filter the accounts by conditions is true
let overdueLoans = loans.filter(l => l.overDue);

//filtered account amounts are added for total overDue amounts
let overdueAmounts = loans.reduce((sum,l) => sum + l.amount, 0);

console.log("------Loans Summary Portfolio------");
console.log("loans Summary:", loanSummary);

console.log("-----OverDue Loans-----");
console.log("OverDue Loans:", overdueLoans)

console.log("-----OverDue Amounts-----")
console.log("OverDue Amounts:", overdueAmounts);
