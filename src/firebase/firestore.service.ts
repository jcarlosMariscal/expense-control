import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
} from "firebase/firestore";
import { db } from "./config";
import { IUserProfile } from "../interfaces/auth.interface";
import { TCategory } from "../interfaces/collections.interface";

export const getUserProfile = async (
  uid: string
): Promise<IUserProfile | boolean> => {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const userData = docSnap.data() as IUserProfile;
    return userData;
  } else {
    return false;
  }
};

export const getAllCategories = async (
  name: string
): Promise<TCategory[] | boolean> => {
  const q = query(collection(db, name, "categories_default", "categories"));
  const querySnapshot = await getDocs(q);
  if (!querySnapshot.empty) {
    const categories = querySnapshot.docs.map((doc) => {
      const data = doc.data() as TCategory;
      return { id: doc.id, ...data };
    });
    return categories;
  } else {
    return false;
  }
};

export const createUserProfile = async (
  uid: string,
  user: IUserProfile
): Promise<boolean> => {
  try {
    await setDoc(doc(db, "users", uid), user);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
export const createCategory = async (
  collection: string,
  uid: string,
  id: string,
  category: TCategory
): Promise<boolean> => {
  try {
    await setDoc(doc(db, collection, uid, "categories", id), category);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
export const createCategories = async (
  categories: TCategory[],
  collection: string,
  uid: string
): Promise<boolean> => {
  const tasks = categories.map(async (category: TCategory) => {
    const { id, ...categoryData } = category;
    if (id) {
      return createCategory(collection, uid, id, categoryData);
    }
  });
  try {
    await Promise.all(tasks);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
export const createCategoriesForUser = async (
  uid: string
): Promise<boolean> => {
  const catExpense = await getAllCategories("categories_expense");
  const catIncome = await getAllCategories("categories_income");
  if (!catExpense || !catIncome) return false;
  let res: boolean = false;
  if (Array.isArray(catExpense) && Array.isArray(catIncome)) {
    const createCatExp = await createCategories(
      catExpense,
      "categories_expense",
      uid
    );
    const createCatInc = await createCategories(
      catExpense,
      "categories_income",
      uid
    );
    if (!createCatExp || !createCatInc) res = false;
    res = true;
  }
  return res;
};
// 79
