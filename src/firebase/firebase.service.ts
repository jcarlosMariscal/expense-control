import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./config";
import { IUserForm } from "../interfaces/auth.interface";

export const signUp = async (email: string, password: string) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signIn = async ({ email, password }: IUserForm) => {
  return await signInWithEmailAndPassword(auth, email, password);
};
