import { Tabs } from "flowbite-react";
import { TableCategories } from "../components/Pure/TableCategories";
// import { dataTable } from "../components/data/tableData";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { getAllCategories } from "../firebase/firestore.service";
import { TCategory } from "../interfaces/collections.interface";

export const CategoriesPage = () => {
  const { user } = useContext(AuthContext);
  const [catExpenses, setcatExpenses] = useState<TCategory[]>();
  const [catIncomes, setcatIncomes] = useState<TCategory[]>();

  const getExpensesData = async () => {
    if (!user) return;
    const catExp = await getAllCategories("categories_expense", user?.uid);
    if (catExp.data) {
      setcatExpenses(catExp.data);
      console.log(catExp);
    }
  };
  const getIncomesData = async () => {
    if (!user) return;
    const catExp = await getAllCategories("categories_income", user?.uid);
    if (catExp.data) {
      setcatIncomes(catExp.data);
      console.log(catExp);
    }
  };
  useEffect(() => {
    getIncomesData();
    getExpensesData();
  }, []);

  return (
    <Tabs aria-label="Default tabs" style="underline">
      <Tabs.Item active title="Category Income">
        <TableCategories data={catIncomes} />
      </Tabs.Item>
      <Tabs.Item title="Category Expenses">
        <TableCategories data={catExpenses} />
      </Tabs.Item>
    </Tabs>
  );
};
