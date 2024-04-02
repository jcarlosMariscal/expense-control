import { User } from "firebase/auth";
export interface IAuthResponse {
  success: boolean;
  error?: string;
}

export interface IUserForm {
  email: string;
  password: string;
  // displayName: string;
}
export interface IAuth {
  user: User | null; //type User comes from firebase
  loading: boolean;
  status: boolean;
  SignInWithEmail: (creds: IUserForm) => Promise<IAuthResponse>;
  SignUpWithEmail: (creds: IUserForm) => Promise<IAuthResponse>;
  SignOut: () => Promise<IAuthResponse>;
}
