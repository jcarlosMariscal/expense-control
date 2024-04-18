import { Button, Dropdown } from "flowbite-react";
import { ICategory, ICollectionMain } from "../../interfaces/collections.interface";
import { collectionMainSchema } from "../../hooks/validationForm";
import { useContext, useEffect, useState } from "react";
import {Formik, Form} from 'formik';
import { FormikFlowbiteTextInput } from "../Pure/FormikFlowbiteTextInput";
import { AuthContext } from "../../context/AuthContext";
import {  getAllCollection } from "../../firebase/firestore.service";
import icons from "../../data/categoriesIcons";
import { colors } from "../../data/categoriesColor";
import { Timestamp } from "firebase/firestore";

type TProps = {
  color: string;
  sendData: (param:ICollectionMain) => void
};
export const ModalFormAddContent = ({ color, sendData }: TProps) => {
  const { user } = useContext(AuthContext);
    const initialData:ICollectionMain = {name: "", description: "", amount: 0, category:""}
  const [categoryData, setcategoryData] = useState<ICollectionMain>(initialData);
  const [allCategories, setAllCategories] = useState<ICategory[] | null>(null)
  const [isHovered, setIsHovered] = useState<string>("")
  const [selectedCat, setSelectedCat] = useState<ICategory | null>(null);
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
    if (categoryData.category === "") {
      seterrorSelectCategory(true);
      return;
    }
    const documentData:ICollectionMain = {...data, category: categoryData.category, date: Timestamp.now()}
    seterrorSelectCategory(false);
    sendData(documentData)
  };
  const selectCategory = (category: ICategory) => {
    setSelectedCat(category);
    setcategoryData({ ...categoryData, category: category.id as string });
    seterrorSelectCategory(false);
  }
  const customDropdown = () => {
    const light = selectedCat ? colors[selectedCat.color].light : "";
    const strong = selectedCat ? colors[selectedCat.color].strong : "";
    const border = !selectedCat ? "border border-gray-600" : ""
    const icon = selectedCat ? icons[selectedCat.icon] : "";
    return (
      <span className={`mt-7 cursor-pointer p-2 rounded-lg color-text flex ${border}`}
        style={{ background: light }}>
        {selectedCat ? <span className="mr-2" style={{ color: strong }}>{icon}</span> : ""}
        {selectedCat ? selectedCat.name : "Select a category"}
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
