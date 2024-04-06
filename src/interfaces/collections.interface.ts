export interface Response<IData = undefined> {
  success: boolean;
  data?: IData;
  message?: string;
}
// ----------------- COLLECTIONS ------------------------------
export interface TCategory {
  id?: string;
  name: string;
  description: string;
  color: string;
  icon: string;
}

// ----------------- PARAMS METHODS ------------------------------
