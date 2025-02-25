import { StyleSheet, Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-contect";

function AllExpenses() {
   const expensesCtx = useContext(ExpensesContext)
   return <ExpensesOutput expenses={expensesCtx.expenses} expensesPeriod="total" fallbackText={"No registered expenses found"}/>
}

export default AllExpenses;

const styles = StyleSheet.create({
    
})