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
import { SignUp } from "../components/auth/SignUp";
import { SignIn } from "../components/auth/SignIn";
import { AuthPage } from "../pages/AuthPage";
export const AppRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<HomePage />}>
          <Route index element={<DashboardPage />}></Route>
          <Route path="dashboard" element={<DashboardPage />}></Route>
          <Route path="income" element={<IncomePage />}></Route>
          <Route path="expenses" element={<ExpensesPage />}></Route>
          <Route path="setting" element={<SettingPage />}></Route>
          <Route path="categories" element={<CategoriesPage />}></Route>
        </Route>
        <Route path="auth/" element={<AuthPage />}>
          <Route index element={<SignIn />}></Route>
          <Route path="login" element={<SignIn />}></Route>
          <Route path="register" element={<SignUp />}></Route>
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
};
