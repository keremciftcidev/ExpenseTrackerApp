import {  View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES = [
    {
        id:"e1",
        description:"A pair of shoes",
        amount:59.99,
        date: new Date("2024-12-19")
    },
    {
        id:"e2",
        description:"A pair of trousers",
        amount:109.99,
        date: new Date("2024-10-19")
    },{
        id:"e3",
        description:"Some bananas ",
        amount:5.99,
        date: new Date("2024-11-19")
    },
    {
        id:"e1",
        description:"book",
        amount:14.99,
        date: new Date("2025-12-19")
    }
]

function ExpensesOutput({ expenses,expensesPeriod }) {
    


  return (
    <View>
     <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod}/>
      <ExpensesList expenses={DUMMY_EXPENSES}/>
    </View>
  );
}

export default ExpensesOutput;
