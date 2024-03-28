import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { DashboardPage } from "../pages/DashboardPage";
import { IncomePage } from "../pages/IncomePage";
import { HomePage } from "../pages/HomePage";
import { ExpensesPage } from "../pages/ExpensesPage";
import { SettingPage } from "../pages/SettingPage";
import { CategoriesPage } from "../pages/CategoriesPage";
// import { LoginComponent } from "../components/auth/LoginComponent";
import { SignUp } from "../components/auth/SignUp";
import { SignIn } from "../components/auth/SignIn";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/register" element={<SignUp />}></Route>
      <Route path="/login" element={<SignIn />}></Route>
      <Route path="/" element={<HomePage />}>
        <Route index element={<DashboardPage />}></Route>
        <Route path="dashboard" element={<DashboardPage />}></Route>
        <Route path="income" element={<IncomePage />}></Route>
        <Route path="expenses" element={<ExpensesPage />}></Route>
        <Route path="setting" element={<SettingPage />}></Route>
        <Route path="categories" element={<CategoriesPage />}></Route>
      </Route>
      {/* <Route path="/login" element={<LoginPage />} /> */}
    </>
  )
);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
