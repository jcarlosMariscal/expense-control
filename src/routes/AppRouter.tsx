import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { DashboardPage } from "../pages/DashboardPage";
import { IncomePage } from "../pages/IncomePage";
import { HomePage } from "../pages/HomePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />}>
        <Route index element={<DashboardPage />}></Route>
        <Route path="income" element={<IncomePage />}></Route>
      </Route>
      {/* <Route path="/login" element={<LoginPage />} /> */}
    </>
  )
);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};