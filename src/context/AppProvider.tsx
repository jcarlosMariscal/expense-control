import { ReactNode, useState } from 'react'
import { AppContext } from './AppContext'

export const AppProvider = ({ children }: {children:ReactNode}) => {
  const [isModalAddOpen, setIsModalAddOpen] = useState<boolean>(false);
  const [titleModalAdd, setTitleModalAdd] = useState<string>("New Modal");

  const toggleModalAdd = (state: boolean) => {
    setIsModalAddOpen(prev => typeof state === 'boolean' ? state : !prev)
  }
  const changeTitleModalAdd = (title: string) => setTitleModalAdd(title);

  const values = {
    modalAdd: {
      isModalAddOpen,
      toggleModalAdd,
      titleModalAdd,
      changeTitleModalAdd
    },
  }
  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  )
}
