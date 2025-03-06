import ExpensesOutput from "../components/ExpensesOutput";
import { useContext, useEffect } from "react";
import { ExpensesContext } from "../store/expenses-contect";
import { getDateMinusDays } from "../util/Date";
import { fetchExpenses } from "../util/http";

function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    async function getExpenses() {
      const expenses = await fetchExpenses();
    }
    getExpenses();
  }, []);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });
  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod={"Last 7 days"}
      fallbackText={"No registered expenses last 7 days"}
    />
  );
}

export default RecentExpenses;
