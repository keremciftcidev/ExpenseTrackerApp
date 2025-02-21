import { act, createContext, useReducer } from "react";

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
        id:"e4",
        description:"book",
        amount:14.99,
        date: new Date("2025-12-19")
    }
]

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  updateExpense: (id, { description, amount, date }) => {},
  deleteExpense: (id) => {},
});
function expenseReducer(state, action) {
  switch (action.type) {
    case "ADD":
        const id = new Date().toString() + Math.random().toString()
        return [{...action.payload},...state]
    case "UPDATE":
        const updatableExpenseIndex = state.findIndex((expense)=>expense.id === action.payload.id)
        const updatableExpense = state[updatableExpenseIndex]
        const updatedItem = {...updatableExpense,...action.payload.data}
        const updatedExpenses = [...state]
        updatedExpenses[updatableExpenseIndex] = updatedItem
        return updatedExpenses
    case "DELETE":
        return state.filter((expense)=> expense.id != action.payload)
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState,dispatch] = useReducer(expenseReducer , DUMMY_EXPENSES);

  function addExpense({expenseData}){
    dispatch({type:"ADD" , payload:expenseData})
  }
  function deleteExpense({id}){
    dispatch({type:"DELETE" , payload:id})
  }
  function updateExpense({id,expenseData}){
    dispatch({type:"UPDATE" , payload:{id:id,data:expenseData}})
  }



  return <ExpensesContext.Provider>{children}</ExpensesContext.Provider>;
}

export default ExpensesContextProvider;
