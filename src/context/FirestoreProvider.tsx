import React, { ReactNode, useState } from 'react'
import { FirestoreContext } from './FirestoreContext'

export const FirestoreProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [collectionData, setCollectionData] = useState([]);

  const getCollectionData = () => {}
  const values: IAuth = {
    collectionData,
    loading: isLoading,
    getCollectionData,
  };
  return (
    <FirestoreContext.Provider value={values}>{children}</FirestoreContext.Provider>
  )
}
