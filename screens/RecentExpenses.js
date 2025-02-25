
import ExpensesOutput from "../components/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-contect";
import { getDateMinusDays } from "../util/Date";

function RecentExpenses() {
    const expensesCtx = useContext(ExpensesContext)
    const recentExpenses = expensesCtx.expenses.filter((expense)=>{
        const today = new Date()
        const date7DaysAgo =getDateMinusDays(today,7)

        return (expense.date >= date7DaysAgo) && (expense.date <= today)
    })
    return  <ExpensesOutput expenses={recentExpenses} expensesPeriod={"Last 7 days"} fallbackText={"No registered expenses last 7 days"}/>
}

export default RecentExpenses;

