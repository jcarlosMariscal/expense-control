import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import { ReactNode, useEffect, useState } from "react";
import { auth, db } from "../firebase/config";
import { AuthContext } from "./AuthContext";
import {
  IAuth,
  IAuthResponse,
  IRegisterForm,
  IUserForm,
  IUserProfile,
} from "../interfaces/auth.interface";
import { FirebaseError } from "firebase/app";
import { Spinner } from "flowbite-react";
import { ERROR_MESSAGES } from "../utils/authErrors";

import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
} from "firebase/firestore";

let errMessage = "Ha ocurrido un error. Intente de nuevo más tarde.";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<IUserProfile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAuthLoading, setIsAuthLoading] = useState<boolean>(true);
  const [status, setStatus] = useState<boolean>(false);

  const getUserProfile = async (user: User): Promise<boolean> => {
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const userData = docSnap.data() as IUserProfile;
      setUserProfile(userData);
      return true;
    } else {
      return false;
    }
  };
  interface TCategory {
    id?: string;
    name: string;
    description: string;
    color: string;
    icon: string;
  }
  const getAllCategories = async (
    nameCollection: string
  ): Promise<TCategory[] | boolean> => {
    const q = query(
      collection(db, nameCollection, "categories_default", "categories")
    );
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
  const createCategoriesForUser = async (uid: string): Promise<boolean> => {
    const categoriesExpense = await getAllCategories("categories_expense");
    const categoriesIncome = await getAllCategories("categories_income");
    if (!categoriesExpense || !categoriesIncome) return false;
    // const userCategoriesExp = collection(db,"categories_expense",uid,"categories");
    if (Array.isArray(categoriesExpense) && Array.isArray(categoriesIncome)) {
      categoriesExpense.forEach(async (category: TCategory) => {
        const { id, name, description, color, icon } = category;
        // await addDoc(userCategoriesExp, { name, description, color, icon });
        if (id) {
          await setDoc(doc(db, "categories_expense", uid, "categories", id), {
            name,
            description,
            color,
            icon,
          });
        }
      });
      categoriesIncome.forEach(async (category: TCategory) => {
        const { id, name, description, color, icon } = category;
        if (id) {
          await setDoc(doc(db, "categories_income", uid, "categories", id), {
            name,
            description,
            color,
            icon,
          });
        }
      });
    }

    return true;
  };

  const SignUpWithEmail = async (
    form: IRegisterForm
  ): Promise<IAuthResponse> => {
    const { name, last_name, email, password } = form;
    setIsLoading(true);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      if (!user) {
        setIsLoading(false);
        setStatus(true);
        return { success: false, error: errMessage };
      }
      setStatus(false);
      setCurrentUser(user);
      await setDoc(doc(db, "users", user.uid), {
        name,
        last_name,
        picture:
          "https://www.shareicon.net/data/512x512/2016/09/15/829452_user_512x512.png",
      });
      createCategoriesForUser(user.uid);
      return { success: true };
    } catch (error) {
      if (error instanceof FirebaseError)
        errMessage = ERROR_MESSAGES[error.code];
      setStatus(true);
      setIsLoading(false);
      return { success: false, error: errMessage };
    }
  };

  const SignInWithEmail = async (form: IUserForm): Promise<IAuthResponse> => {
    const { email, password } = form;
    setIsLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;
      if (!user) {
        setIsLoading(false);
        setStatus(true);
        return { success: false, error: errMessage };
      }
      setStatus(false);
      setCurrentUser(user);
      const getUser = await getUserProfile(user);
      if (getUser) {
        return { success: true };
      } else {
        return { success: false, error: "No such document!" };
      }
    } catch (error) {
      setStatus(true);
      if (error instanceof FirebaseError)
        errMessage = ERROR_MESSAGES[error.code];
      setIsLoading(false);
      return { success: false, error: errMessage };
    }
  };

  const SignOut = async (): Promise<IAuthResponse> => {
    setIsLoading(true);
    try {
      await signOut(auth);
      setCurrentUser(null);
      return { success: true };
    } catch (error) {
      setIsLoading(false);
      return {
        success: false,
        error: "Ha ocurrido un error al intentar cerrar sesión.",
      };
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      setIsAuthLoading(false);
      if (user !== null) await getUserProfile(user);
    });
    return unsubscribe;
  }, []);

  if (isAuthLoading)
    return (
      <div className="color-bg-primary color-text h-screen flex-center flex-col gap-4">
        <Spinner aria-label="Extra large spinner example" size="xl" />
        <p>Loading...</p>
      </div>
    );
  const authValues: IAuth = {
    user: currentUser,
    userProfile,
    loading: isLoading,
    status,
    SignInWithEmail,
    SignUpWithEmail,
    SignOut,
  };
  return (
    <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
  );
};
// 125
