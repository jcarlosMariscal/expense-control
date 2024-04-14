import { createContext } from "react";

export const FirestoreContext = createContext({
  collectionData: [],
  loading: false,
  getCollectionData: async () => {
    return { success: false };
  },
})