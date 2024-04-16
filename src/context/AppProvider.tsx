import { ReactNode, useState } from 'react'
import { AppContext } from './AppContext'

export const AppProvider = ({ children }: {children:ReactNode}) => {
  const [isModalIncomeOpen, setIsModalIncomeOpen] = useState<boolean>(false);
  const [isModalIncomeCatOpen, setIsModalIncomeCatOpen] = useState<boolean>(false);
  const [isModalExpenseCatOpen, setIsModalExpenseCatOpen] = useState<boolean>(false);

  const toggleModalIncome = (state: boolean) => {
    setIsModalIncomeOpen(prev => typeof state === 'boolean' ? state : !prev)
  }
  const toggleModalIncomeCat = (state: boolean) => {
    setIsModalIncomeCatOpen(prev => typeof state === 'boolean' ? state : !prev)
  }
  const toggleModalExpenseCat = (state: boolean) => {
    setIsModalExpenseCatOpen(prev => typeof state === 'boolean' ? state : !prev)
  }

  const values = {
    modalIncome: {
      isModalIncomeOpen,
      toggleModalIncome,
    },
    modalIncomeCategory: {
      isModalIncomeCatOpen,
      toggleModalIncomeCat,
    },
    modalExpenseCategory: {
      isModalExpenseCatOpen,
      toggleModalExpenseCat,
    }
  }
  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  )
}
