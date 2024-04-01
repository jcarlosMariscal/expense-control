import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { ReactNode, useEffect, useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import { AuthContext } from "./AuthContext";
import {
  IAuth,
  LoginFormValues,
  UserFormValues,
} from "../interfaces/auth.interface";
import { SignIn } from "../firebase/authService";

type TAuth = {
  children: ReactNode;
};
export const AuthProvider = ({ children }: TAuth) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAuthLoading, setIsAuthLoading] = useState<boolean>(true);
  const [status, setStatus] = useState<boolean>(false);

  //Sign up
  const SignUpWithEmail = async ({ email, password }: UserFormValues) => {
    setIsLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = result.user;

      if (!user) {
        setIsLoading(false);
        setStatus(true);
        return;
      }
      setStatus(false);
      setCurrentUser(user);
    } catch (error) {
      console.log(error);
      setStatus(true);
      // if (error.code === "auth/email-already-in-use") {
      // } else if (error.code === "auth/too-many-requests") {
      // }
      // you can check for more error like email not valid or something
      setIsLoading(false);
    }
  };

  //Sign in
  const SignInWithEmail = async (creds: LoginFormValues) => {
    setIsLoading(true);
    // SignIn(creds)
    //   .then((userCredential) => {
    //     const { user } = userCredential;
    //     if (user) {
    //       setCurrentUser(user);
    //       //redirect user to targeted route
    //       // navigate("/dashboard", { replace: true });
    //       return true;
    //     } else {
    //       //do something }
    //       return false;

    //       setIsLoading(false);
    //     }
    //   })
    //   .catch((error) => {
    //     if (error.code === "auth/wrong-password") {
    //       //show error
    //     } else if (error.code === "auth/too-many-requests") {
    //       //show error
    //     }
    //     setIsLoading(false);
    //     return false;
    //   });
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
    //onAuthStateChanged check if the user is still logged in or not
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setIsAuthLoading(false);
    });
    return unsubscribe;
  }, []);

  //If loading for the first time when visiting the page
  if (isAuthLoading) return <div>Cargando...</div>;
  return (
    <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
  );
};
