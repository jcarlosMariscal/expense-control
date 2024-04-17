import { createContext } from "react";


export const AppContext = createContext({
  modalAdd: {
    isModalAddOpen:false,
    toggleModalAdd: (param: boolean) => console.log(param),
    titleModalAdd:"",
    changeTitleModalAdd:(param:string) => console.log(param)
  },
})