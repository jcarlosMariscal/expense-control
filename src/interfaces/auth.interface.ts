import { User } from "firebase/auth";

export interface LoginFormValues {
  email: string;
  password: string;
}

export interface UserFormValues {
  email: string;
  password: string;
  // displayName: string;
}
export interface IAuth {
  user: User | null; //type User comes from firebase
  loading: boolean;
  status: boolean;
  result: boolean;
  SignInWithEmail: (creds: LoginFormValues) => void;
  SignUpWithEmail: (creds: UserFormValues) => void;
  SignOut: () => void;
}
// interface IAuth {
//   user: User; // Asume que tienes un tipo User definido en alguna parte
//   loading: boolean;
//   SignInWithEmail: () => void;
//   SignUpWithEmail: () => void;
//   SignOut: () => void;
// }
