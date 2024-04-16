import { createContext } from "react";


export const AppContext = createContext({
  modalIncome: {
    isModalIncomeOpen:false,
    toggleModalIncome:(param:boolean) => console.log(param),
    },
    modalIncomeCategory: {
      isModalIncomeCatOpen:false,
      toggleModalIncomeCat:(param:boolean) => console.log(param),
    },
    modalExpenseCategory: {
      isModalExpenseCatOpen:false,
      toggleModalExpenseCat:(param:boolean) => console.log(param),
    }
})