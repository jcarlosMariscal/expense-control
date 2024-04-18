import { Button, Dropdown } from "flowbite-react";
import { ICategory, ICollectionMain } from "../../interfaces/collections.interface";
import { collectionMainSchema } from "../../hooks/validationForm";
import { useContext, useEffect, useState } from "react";
import {Formik, Form} from 'formik';
import { FormikFlowbiteTextInput } from "../Pure/FormikFlowbiteTextInput";
import { AuthContext } from "../../context/AuthContext";
import { createDocumentCollectionMain, getAllCollection } from "../../firebase/firestore.service";
import icons from "../../data/categoriesIcons";
import { colors } from "../../data/categoriesColor";
import { Timestamp } from "firebase/firestore";
import { alertTimer } from "../../utils/alerts";
import { AppContext } from "../../context/AppContext";
// import { AppContext } from "../../context/AppContext";

type TProps = {
  color: string;
};
export const ModalFormAddContent = ({ color }: TProps) => {
  const { user } = useContext(AuthContext);
    const initialData:ICollectionMain = {
    name: "", description: "", amount: 0, category:""
  }
    const { modalAdd } = useContext(AppContext);
  const {toggleModalAdd } = modalAdd;
  const [categoryData, setcategoryData] = useState<ICollectionMain>(initialData);
  const [allCategories, setAllCategories] = useState<ICategory[] | null>(null)
  const [isHovered, setIsHovered] = useState<string>("")
  const [selectedCategory, setSelectedCategory] = useState<ICategory | null>(null);
  const [errorSelectCategory, seterrorSelectCategory] = useState<boolean>(false)

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setcategoryData({ ...categoryData, [name]: value });
  };
  const getAllCategories = async() => {
    if (!user) return;
    const response = await getAllCollection("categories_income", user?.uid, "categories");
    if(response.success) setAllCategories(response.data as ICategory[])
    
  }
  useEffect(() => {
    getAllCategories();
  }, [])
  
  const formData = async (data: ICollectionMain) => {
    if (!user) return;
    console.log(categoryData.category);
    
    if (categoryData.category === "") {
      seterrorSelectCategory(true);
      return;
    }
    const documentData:ICollectionMain = {
...data, category: categoryData.category, date: Timestamp.now(),
    }
    console.log(data);
    
    seterrorSelectCategory(false);
    const response = await createDocumentCollectionMain("incomes", user?.uid, "incomesData", documentData);
    console.log(response);
    
    response.success ? alertTimer("Success", "success", 1500) : alertTimer("Error", "error", 1500);
    toggleModalAdd(false);
  };
  const selectCategory = (category: ICategory) => {
    console.log(category);
    
    setSelectedCategory(category);
    setcategoryData({ ...categoryData, category: category.id as string });
    seterrorSelectCategory(false);
  }
  // const getColorCategory = () => {
  //   return {light: "", strong:""}
  // }
  
  const customDropdown = () => {
    const light = selectedCategory ? colors[selectedCategory.color].light : "";
    const strong = selectedCategory ? colors[selectedCategory.color].strong : "";
    const border = !selectedCategory ? "border border-gray-600" : ""
    const icon = selectedCategory ? icons[selectedCategory.icon] : "";
    return (
      <span className={`mt-7 cursor-pointer p-2 rounded-lg color-text flex ${border}`}
        style={{ background: light }}>
        {
          selectedCategory ? <span className="mr-2" style={{ color: strong }}>{icon}</span> : ""
        }
        {selectedCategory ? selectedCategory.name : "Select a category"}
    </span>);
  }
  return (
    <>
      <Formik initialValues={initialData} validationSchema={collectionMainSchema} enableReinitialize
        onSubmit={(values) => formData(values)}>
        <Form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormikFlowbiteTextInput type="text" name="name" label="Name" placeholder="Enter a name"
              handleChange={handleChange} />
            <FormikFlowbiteTextInput type="text" name="description" label="Description"
              placeholder="Enter a description" handleChange={handleChange} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <FormikFlowbiteTextInput type="number" name="amount" label="Amount" placeholder="Enter a name"
              handleChange={handleChange} />
            <div>
              <Dropdown label="" dismissOnClick={true} renderTrigger={customDropdown}>
                {allCategories?.map(item => (
                  <Dropdown.Item key={item.id} onClick={() => selectCategory(item)}
                    onMouseEnter={() => setIsHovered(item.id as string)} 
                    onMouseLeave={() => setIsHovered("")}
                    style={{ background: isHovered === item.id ? colors[item.color].light : "" }}>
                    <span className="mr-2" style={{ color: colors[item.color].strong }}>{icons[item.icon]}</span>
                    {item.name}
                  </Dropdown.Item>
                ))}
              </Dropdown>
              {errorSelectCategory && (<span className="text-red-500">Field required</span>)}
            </div>
          </div>
        <Button type="submit" color={color} pill className="my-4">Save Category</Button>
      </Form>
    </Formik>
    </>
  );
};
// 188
