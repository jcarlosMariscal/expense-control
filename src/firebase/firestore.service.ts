import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
} from "firebase/firestore";
import { db } from "./config";
import { IUserProfile } from "../interfaces/auth.interface";
import { Response, ICategory } from "../interfaces/collections.interface";

export const getUserProfile = async (
  uid: string
): Promise<Response<IUserProfile>> => {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const data = docSnap.data() as IUserProfile;
    return { success: true, message: "Datos obtenidos.", data };
  } else {
    return { success: false, message: "Error al obtener datos." };
  }
};

export const getAllCategories = async (
  collecName: string,
  document: string
): Promise<Response<ICategory[]>> => {
  const q = query(collection(db, collecName, document, "categories"));
  const querySnapshot = await getDocs(q);
  if (!querySnapshot.empty) {
    const categories = querySnapshot.docs.map((doc) => {
      const data = doc.data() as ICategory;
      return { id: doc.id, ...data };
    });
    return { success: true, message: "Datos obtenidos.", data: categories };
  } else {
    return { success: false, message: "Error al obtener datos." };
  }
};

export const createUserProfile = async (
  uid: string,
  user: IUserProfile
): Promise<Response> => {
  try {
    await setDoc(doc(db, "users", uid), user);
    return { success: true, message: "Creación correcta" };
  } catch (error) {
    return { success: false, message: "Error en creación." };
  }
};
type TCreateCategory = {
  collection: string;
  uid: string;
  id: string;
  category: ICategory;
};
export const createCategoryWithId = async ({
  collection,
  uid,
  id,
  category,
}: TCreateCategory): Promise<Response> => {
  try {
    await setDoc(doc(db, collection, uid, "categories", id), category);
    return { success: true, message: "Creación correcta" };
  } catch (error) {
    return { success: false, message: "Error en creación." };
  }
};
export const createCategory = async (
  name: string,
  uid: string,
  category: TCreateCategory
): Promise<Response> => {
  try {
    // const s = await setDoc(doc(db, collection, uid, "categories"), category);
    await addDoc(collection(db, name, uid, "categories"), category);
    // const s = await setDoc(doc(db, collection, uid, "categories"), category);
    // console.log(s.);

    return { success: true, message: "Creación correcta" };
  } catch (error) {
    return { success: false, message: "Error en creación." };
  }
};
export const createCategories = async (
  categories: ICategory[],
  collection: string,
  uid: string
): Promise<Response> => {
  const tasks = categories.map(async (category: ICategory) => {
    const { id, ...categoryData } = category;
    if (id) {
      return (
        await createCategoryWithId({
          collection,
          uid,
          id,
          category: categoryData,
        })
      ).data;
    }
  });
  try {
    await Promise.all(tasks);
    return { success: true, message: "Creación múltiple correcta" };
  } catch (error) {
    console.log(error);
    return { success: false, message: "Creación múltiple fallida" };
  }
};
export const createCategoriesForUser = async (
  uid: string
): Promise<Response> => {
  const catExp = "categories_expense";
  const catInc = "categories_income";
  const catExpense = await getAllCategories(catExp, "categories_default");
  const catIncome = await getAllCategories(catInc, "categories_default");
  if (!catExpense.success || !catIncome.success)
    return { success: false, message: "No arreglos" };
  let res: boolean = false;
  if (Array.isArray(catExpense.data) && Array.isArray(catIncome.data)) {
    const createCatExp = await createCategories(catExpense.data, catExp, uid);
    const createCatInc = await createCategories(catIncome.data, catInc, uid);
    if (!createCatExp || !createCatInc) res = false;
    res = true;
  }
  return {
    success: res,
    message: res ? "Categorias creadas" : "Crecion fallida",
  };
};
// 79
