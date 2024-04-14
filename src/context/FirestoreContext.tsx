import { createContext } from "react";
import { ICategory } from "../interfaces/collections.interface";

  type TValues = {
    collectionData: ICategory[]
    loading: boolean;
    getCollectionData: () => void
  }
export const FirestoreContext = createContext<TValues>({
  collectionData: [],
  loading: false,
  getCollectionData: async () => {
    return { success: false };
  },
})