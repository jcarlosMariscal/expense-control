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
export interface IUserProfile {
  name: string;
  last_name: string;
  picture: string;
}
export interface IRegisterForm {
  name: string;
  last_name: string;
  email: string;
  password: string;
  // displayName: string;
}
export interface IAuth {
  user: User | null; //type User comes from firebase
  userProfile: IUserProfile | null;
  loading: boolean;
  status: boolean;
  SignInWithEmail: (creds: IUserForm) => Promise<IAuthResponse>;
  SignUpWithEmail: (creds: IRegisterForm) => Promise<IAuthResponse>;
  SignOut: () => Promise<IAuthResponse>;
}
