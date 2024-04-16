import { Button, Dropdown, Spinner } from "flowbite-react";
import { TableCategories } from "../components/category/TableCategories";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  createCategory,
  deleteCategory,
  getAllCollection,
  updateCategory,
} from "../firebase/firestore.service";
import { ICategory } from "../interfaces/collections.interface";
import { BiPlus } from "react-icons/bi";
import { ModalComponent } from "../components/Pure/ModalComponent";
import { ModalContent } from "../components/category/ModalContent";
import { alertTimer, deleteDocument } from "../utils/alerts";

export const CategoriesPage = () => {
  const { user } = useContext(AuthContext);
  const [catExpenses, setCatExpenses] = useState<ICategory[]>();
  const [catIncomes, setCatIncomes] = useState<ICategory[]>();
  const [catSelected, setCatSelected] = useState("Income");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [reloadFlag, setReloadFlag] = useState(false);
  // ------------ MODAL -----------------
  const [idCategory, setIdCategory] = useState<string | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("Add Category");
  const [btnText, setBtnText] = useState("Save Category");
  const [categoryInitialData, setCategoryInitialData] = useState<ICategory>(
    { name: "", description: "", color: "blue", icon: "bus" }
  );

  const getCategoriesData = async (collection:string, setCategories:(param:ICategory[])=>void) => {
    setIsLoading(true);
    if (!user) return;
    const catExp = await getAllCollection(collection, user?.uid, "categories");
    if (catExp.data) {
      setCategories(catExp.data);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getCategoriesData("categories_expense", setCatExpenses);
    getCategoriesData("categories_income", setCatIncomes);
  }, [reloadFlag]);
  const current = {
    color: catSelected === "Income" ? "lime" : "yellow",
    collection: catSelected === "Income" ? "categories_income" : "categories_expense",
    data: catSelected === "Income" ? catIncomes : catExpenses
  }
  const changeCategory = (collection: string) => setCatSelected(collection);
  
  const showModal = (id: string | null = null) => {
    setIdCategory(id);
    const action = id ? "Edit category" : "Create category";
    const btnText = id ? "Update category" : "Save category";
    const title = catSelected === "Income" ? "for Incomes" : "for Expenses";
    setOpenModal(true);
    setModalTitle(`${action} ${title}`);
    setBtnText(btnText);
    
    const base:ICategory = { name: "", description: "", icon: "bus", color: "blue" }
    const search: ICategory = current.data?.find(el => el.id === id) || base;
    const {name,description, color, icon } = search
    const initialData: ICategory = (id) ? { name, description, color, icon } : base;
    setCategoryInitialData(initialData);
  };
  const createFirestoreCategory = async (category: ICategory) => {
    if (!user) return
    const create = await createCategory(current.collection, user?.uid, category);
    create.success ? alertTimer("Success", "success", 1500) : alertTimer("Error", "error", 1500);
    setOpenModal(false);
    setReloadFlag(!reloadFlag);
  };
  const updateFirestoreCategory = async (category: ICategory) => {
    if (!user || !idCategory) return;
    const create = await updateCategory(current.collection, user?.uid, idCategory,category);
    create.success ? alertTimer("Success", "success", 1500) : alertTimer("Error", "error", 1500);
    setOpenModal(false);
    setReloadFlag(!reloadFlag);
  };
  const showConfirmAlert = async(id:string, name:string) => {
    const response = await deleteDocument({
        title: `Delete category ${name}`,
        text: "Are you sure to delete this category?",
        confirmButtonText: "Delete",
        confirmButtonColor: "#dc2626"
    })
    if (response) {
      if (response.success) {
        if (!user) return;
        const res = await deleteCategory(current.collection, user?.uid, id);
        res.success ? alertTimer("Deleted", "success", 1500) : alertTimer("Error", "error", 1500);
      }
    }
    setReloadFlag(!reloadFlag);
  }

  return (
    <>
      <div className="flex justify-between items-center">
        <Dropdown label={`${catSelected} Categories`} pill={true} color={current.color}>
          <Dropdown.Item onClick={() => changeCategory("Income")}>Income Categories</Dropdown.Item>
          <Dropdown.Item onClick={() => changeCategory("Expense")}>Expense Categories</Dropdown.Item>
        </Dropdown>
        <Button size="sm" className="size-10 ssm:size-auto !flex-center" color={current.color} pill
          onClick={() => showModal()}>
          <span className="hidden ssm:block mr-2 text-sm">New</span>
          <BiPlus className="size-5" />
        </Button>
      </div>
      <div className="my-4">
        {isLoading ? (
          <div className="flex-center"> <Spinner aria-label="Spinner" size="xl" /> </div>
        ) : (
            <TableCategories data={current.data} bg={current.color}
              showModal={(id) => showModal(id)} showConfirmAlert={showConfirmAlert} />
        )}
      </div>
      <ModalComponent controlsModal={{ openModal, setOpenModal }} title={modalTitle} footer={false}
        btnText={btnText} color={current.color}>
        <ModalContent color={current.color} initialData={categoryInitialData}
          sendCategory={ idCategory ? updateFirestoreCategory : createFirestoreCategory}
        />
      </ModalComponent>
    </>
  );
};
// 176