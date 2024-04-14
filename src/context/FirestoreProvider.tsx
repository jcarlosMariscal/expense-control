import { ReactNode, useContext, useState } from 'react'
import { FirestoreContext } from './FirestoreContext'
import { AuthContext } from './AuthContext';
import { getAllCategories } from '../firebase/firestore.service';
import { ICategory } from '../interfaces/collections.interface';

export const FirestoreProvider = ({ children }: { children: ReactNode }) => {
  const context = useContext(AuthContext);
  const { user } = context;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [collectionData, setCollectionData] = useState<ICategory[]>([]);

  const getCollectionData = async () => {
    setIsLoading(true);
    if (!user) return;
    const catExp = await getAllCategories("categories_income", user?.uid);
    if (catExp.data) {
      console.log("DESDE PROVIDER");
      console.log(catExp.data);
      
      
      setCollectionData(catExp.data);
      setIsLoading(false);
      
    }
  }

  type TValues = {
    collectionData: ICategory[]
    loading: boolean;
    getCollectionData: () => void
  }
  const values:TValues = {
    collectionData,
    loading: isLoading,
    getCollectionData,
  };
  return (
    <FirestoreContext.Provider value={values}>{children}</FirestoreContext.Provider>
  )
}
