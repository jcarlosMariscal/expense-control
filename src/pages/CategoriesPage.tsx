import { Button, Dropdown } from "flowbite-react";
import { TableCategories } from "../components/Pure/TableCategories";
// import { dataTable } from "../components/data/tableData";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { getAllCategories } from "../firebase/firestore.service";
import { TCategory } from "../interfaces/collections.interface";
import { BiPlus } from "react-icons/bi";

export const CategoriesPage = () => {
  const { user } = useContext(AuthContext);
  const [catExpenses, setcatExpenses] = useState<TCategory[]>();
  const [catIncomes, setcatIncomes] = useState<TCategory[]>();
  const [catSelected, setCatSelected] = useState("Income");

  const getExpensesData = async () => {
    if (!user) return;
    const catExp = await getAllCategories("categories_expense", user?.uid);
    if (catExp.data) {
      setcatExpenses(catExp.data);
    }
  };
  const getIncomesData = async () => {
    if (!user) return;
    const catExp = await getAllCategories("categories_income", user?.uid);
    if (catExp.data) {
      setcatIncomes(catExp.data);
    }
  };
  useEffect(() => {
    getIncomesData();
    getExpensesData();
  }, []);

  const changeCategory = (collection: string) => {
    setCatSelected(collection);
    // const s = document.getElementById("content");
    // console.log(s);
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <Dropdown
          label={`${catSelected} Categories`}
          pill={true}
          color={catSelected === "Income" ? "lime" : "yellow"}
        >
          <Dropdown.Item onClick={() => changeCategory("Income")}>
            Income Categories
          </Dropdown.Item>
          <Dropdown.Item onClick={() => changeCategory("Expense")}>
            Expense Categories
          </Dropdown.Item>
        </Dropdown>
        <Button
          size="sm"
          className="size-10 ssm:size-auto !flex-center"
          color={catSelected === "Income" ? "lime" : "yellow"}
          pill
        >
          <span className="hidden ssm:block mr-2 text-sm">New</span>
          <BiPlus className="size-5" />
        </Button>
      </div>
      <div className="my-4">
        {catSelected === "Income" ? (
          <TableCategories data={catIncomes} bg="lime" />
        ) : (
          <TableCategories data={catExpenses} bg="yellow" />
        )}
      </div>
    </>
  );
};
