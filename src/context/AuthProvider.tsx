import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  User,
} from "firebase/auth";
import { ReactNode, useEffect, useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import { AuthContext } from "./AuthContext";
import { IAuth, IAuthResponse, IUserForm } from "../interfaces/auth.interface";
import { FirebaseError } from "firebase/app";

const ERROR_MESSAGES: { [key: string]: string } = {
  "auth/email-already-in-use": "Este correo ya está en uso. Intente con otro.",
  "auth/invalid-email":
    "El formato del correo electrónico no es válido. Por favor, ingresa un correo válido.",
  "auth/operation-not-allowed":
    "El registro con correo electrónico y contraseña no está habilitado. Por favor, contacta al soporte.",
  "auth/weak-password":
    "La contraseña es demasiado débil. Por favor, elige una contraseña más fuerte.",
  "auth/user-disabled":
    "Su cuenta ha sido deshabilitada. Por favor, contacta a soporte.",
  "auth/invalid-credential": "El correo electrónico y contraseña no coinciden.",
};
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

  //Sign out
  const SignOut = async () => {
    setIsLoading(true);
    try {
      await SignOut();
      setCurrentUser(null);
      // navigate("/signin", { replace: true });
    } catch (error) {
      setIsLoading(false);
      //show error alert
    }
  };
  //create Auth Values
  const authValues: IAuth = {
    user: currentUser,
    loading: isLoading,
    status,
    SignInWithEmail,
    SignUpWithEmail,
    SignOut,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setIsAuthLoading(false);
    });
    return unsubscribe;
  }, []);

  if (isAuthLoading) return <div>Cargando...</div>;
  return (
    <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
  );
};
// 125
