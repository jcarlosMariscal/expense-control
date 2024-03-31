import { auth } from "../firebase/firebaseConfig";
import { createContext } from "react";
import { IAuth } from "../interfaces/auth.interface";

export const AuthContext = createContext<IAuth>({
  user: auth.currentUser,
  loading: false,
  status: false,
  result: false,
  SignInWithEmail: () => {},
  SignUpWithEmail: () => {},
  SignOut: () => {},
});

// export const AuthContext = createContext<null | IAuth>(null);
