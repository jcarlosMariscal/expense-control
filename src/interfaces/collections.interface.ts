import { colors } from "../components/data/categoriesColor";
import icons from "../components/data/categoriesIcons";

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

// ----------------- PARAMS METHODS ------------------------------
