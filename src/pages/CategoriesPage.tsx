import { Button, Dropdown, Spinner } from "flowbite-react";
import { TableCategories } from "../components/category/TableCategories";
// import { dataTable } from "../components/data/tableData";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  createCategory,
  getAllCategories,
  updateCategory,
} from "../firebase/firestore.service";
import { ICategory } from "../interfaces/collections.interface";
import { BiPlus } from "react-icons/bi";
import { ModalComponent } from "../components/Pure/ModalComponent";
import { ModalContent } from "../components/category/ModalContent";
import { alertTimer } from "../utils/alerts";
import { FirestoreContext } from "../context/FirestoreContext";

export const CategoriesPage = () => {
  const { user } = useContext(AuthContext);
  const firestore  = useContext(FirestoreContext);
  const { getCollectionData } = firestore;
  const [catExpenses, setcatExpenses] = useState<ICategory[]>();
  const [catIncomes, setcatIncomes] = useState<ICategory[]>();
  const [catSelected, setCatSelected] = useState("Income");
  const [modalTitle, setModalTitle] = useState("Add Category");
  const [btnText, setBtnText] = useState("Save Category");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [openModal, setOpenModal] = useState(false);
  const [reloadFlag, setReloadFlag] = useState(false);
  const [idCategory, setIdCategory] = useState<string | null>(null);

  const getExpensesData = async () => {
    setIsLoading(true);
    if (!user) return;
    const catExp = await getAllCategories("categories_expense", user?.uid);
    if (catExp.data) {
      setcatExpenses(catExp.data);
      setIsLoading(false);
      
    }
  };
  const getIncomesData = async () => {
    setIsLoading(true);
    if (!user) return;
    const catExp = await getAllCategories("categories_income", user?.uid);
    if (catExp.data) {
      setcatIncomes(catExp.data);
      setIsLoading(false);
      
    }
    await getCollectionData();
  };
  useEffect(() => {
    getIncomesData();
    getExpensesData();

    // console.log(catExpenses);
    // console.log(catIncomes);
    
  }, [reloadFlag]);

  const changeCategory = (collection: string) => {
    setCatSelected(collection);
  };
  const handleClick = () => {
    alert("Hola");
  };
  const showModal = (id: string | null = null) => {
    setIdCategory(id);
    const action = id ? "Edit category" : "Create category";
    const title = catSelected === "Income" ? "for Incomes" : "for Expenses";
    setOpenModal(true);
    setModalTitle(`${action} ${title}`);
    setBtnText("Save Category");
  };
  const categoryColor = catSelected === "Income" ? "lime" : "yellow";

  const collection = catSelected === "Income" ? "categories_income" : "categories_expense";
  const categoryData = catSelected === "Income" ? catIncomes : catExpenses;
  const createFirestoreCategory = async (category: ICategory) => {
    const create = await createCategory(collection, user?.uid, category);
    if (create.success) {
      alertTimer("Success", "success", 1500);
    } else {
      alertTimer("Error", "error", 1500);
    }
    setOpenModal(false);
    setReloadFlag(!reloadFlag);
  };
  const updateFirestoreCategory = async (category: ICategory) => {
    const create = await updateCategory(
      collection,
      user?.uid,
      idCategory,
      category
    );
    if (create.success) {
      alertTimer("Updated", "success", 1500);
    } else {
      alertTimer("Error", "error", 1500);
    }
    setOpenModal(false);
    setReloadFlag(!reloadFlag);
  };

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
          onClick={() => showModal()}
        >
          <span className="hidden ssm:block mr-2 text-sm">New</span>
          <BiPlus className="size-5" />
        </Button>
      </div>
      <div className="my-4">
        {catSelected === "Income" ? (
          <>
            {isLoading ? (
              <div className="flex-center">
                <Spinner aria-label="Spinner" size="xl" />
              </div>
            ) : (
              <TableCategories
                data={catIncomes}
                bg={categoryColor}
                showModal={(id) => showModal(id)}
              />
            )}
          </>
        ) : (
          <>
            {isLoading ? (
              <div className="flex-center">
                <Spinner aria-label="Spinner" size="xl" />
              </div>
            ) : (
              <TableCategories
                data={catExpenses}
                bg={categoryColor}
                showModal={(id) => showModal(id)}
              />
            )}
          </>
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
        <ModalContent
          color={categoryColor}
          sendCategory={
            idCategory ? updateFirestoreCategory : createFirestoreCategory
          }
          idCategory={idCategory}
          collectionName={collection}
          categories={categoryData}
        />
      </ModalComponent>
    </>
  );
};
