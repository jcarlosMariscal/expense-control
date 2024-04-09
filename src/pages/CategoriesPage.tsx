import { Button, Dropdown } from "flowbite-react";
import { TableCategories } from "../components/Pure/TableCategories";
// import { dataTable } from "../components/data/tableData";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { getAllCategories } from "../firebase/firestore.service";
import { ICategory } from "../interfaces/collections.interface";
import { BiPlus } from "react-icons/bi";
import { ModalComponent } from "../components/Pure/ModalComponent";
import { ModalContent } from "../components/category/ModalContent";

export const CategoriesPage = () => {
  const { user } = useContext(AuthContext);
  const [catExpenses, setcatExpenses] = useState<ICategory[]>();
  const [catIncomes, setcatIncomes] = useState<ICategory[]>();
  const [catSelected, setCatSelected] = useState("Income");
  const [modalTitle, setModalTitle] = useState("Add Category");
  const [btnText, setBtnText] = useState("Save Category");

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
  };
  const handleClick = () => {
    alert("Hola");
  };
  const addCategory = () => {
    setOpenModal(true);
    setModalTitle("Add Category");
    setBtnText("Save Category");
  };
  const [openModal, setOpenModal] = useState(false);
  const categoryColor = catSelected === "Income" ? "lime" : "yellow";

  return (
    <>
      <div className="flex justify-between items-center">
        <Dropdown
          label={`${catSelected} Categories`}
          pill={true}
          color={categoryColor}
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
          color={categoryColor}
          pill
          onClick={() => addCategory()}
        >
          <span className="hidden ssm:block mr-2 text-sm">New</span>
          <BiPlus className="size-5" />
        </Button>
      </div>
      <div className="my-4">
        {catSelected === "Income" ? (
          <TableCategories data={catIncomes} bg={categoryColor} />
        ) : (
          <TableCategories data={catExpenses} bg={categoryColor} />
        )}
      </div>
      <ModalComponent
        controlsModal={{ openModal, setOpenModal }}
        title={modalTitle}
        footer={false}
        btnText={btnText}
        handleClick={handleClick}
        color={categoryColor}
      >
        <ModalContent color={categoryColor} />
      </ModalComponent>
    </>
  );
};
