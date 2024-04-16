import { Timestamp } from "firebase/firestore";
import { colors } from "../data/categoriesColor";
import icons from "../data/categoriesIcons";

export interface Response<IData = undefined> {
  success: boolean;
  data?: IData;
  message?: string;
}
// ----------------- COLLECTIONS ------------------------------
export interface ICategory {
  id?: string;
  name: string;
  description: string;
  color: keyof typeof colors;
  icon: keyof typeof icons;
}
export interface ICollectionMain {
  id?: string;
  name: string;
  description: string;
  date?: Timestamp;
  category: string;
}

// ----------------- PARAMS METHODS ------------------------------
