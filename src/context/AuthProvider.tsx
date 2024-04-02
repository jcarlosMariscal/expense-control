import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import { ReactNode, useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { AuthContext } from "./AuthContext";
import { IAuth, IAuthResponse, IUserForm } from "../interfaces/auth.interface";
import { FirebaseError } from "firebase/app";
import { Spinner } from "flowbite-react";
import { ERROR_MESSAGES } from "../utils/authErrors";

let errMessage = "Ha ocurrido un error. Intente de nuevo más tarde.";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAuthLoading, setIsAuthLoading] = useState<boolean>(true);
  const [status, setStatus] = useState<boolean>(false);

  const SignUpWithEmail = async (form: IUserForm): Promise<IAuthResponse> => {
    const { email, password } = form;
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
      return { success: true };
    } catch (error) {
      console.log(error);
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
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setIsAuthLoading(false);
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
