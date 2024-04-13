import { Button, Label, TextInput } from "flowbite-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ICategory } from "../../interfaces/collections.interface";
import { yupResolver } from "@hookform/resolvers/yup";
import { categorySchema } from "../../hooks/validationForm";
import { BiPalette } from "react-icons/bi";
import { colors } from "../data/categoriesColor";
import { ModalComponent } from "../Pure/ModalComponent";
import { useEffect, useState } from "react";
import icons from "../data/categoriesIcons";
import { ModalColorsContent } from "./ModalColorsContent";
import { ModalIconsContent } from "./ModalIconsContent";
import { ButtonModal } from "./ButtonModal";
import {Formik, Form, Field} from 'formik';
import { FormikFlowbiteTextInput } from "../Pure/FormikFlowbiteTextInput";

type TProps = {
  color: string;
  sendCategory: (param: ICategory) => void;
  idCategory?: string | null;
  collectionName?: string | null;
  categories: ICategory[]
};
export const ModalContent = ({color,sendCategory,idCategory = null,collectionName = null, categories}: TProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<ICategory>(
    { resolver: yupResolver(categorySchema) }
  );
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openModalIcon, setOpenModalIcon] = useState<boolean>(false);
  const [categoryData, setcategoryData] = useState<ICategory>({
    name: "",
    description: "",
    color: "blue",
    icon: "bus",
  });

  const handleClick = () => {};
  const handleClickColor = (colorName: keyof typeof colors) => {
    setcategoryData({ ...categoryData, color: colorName });
    setOpenModal(false);
  };
  const handleClickIcon = (iconName: keyof typeof icons) => {
    setcategoryData({ ...categoryData, icon: iconName });
    setOpenModalIcon(false);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setcategoryData({ ...categoryData, [name]: value });
  };
  const options = {
    footer: false,
    header: false,
    dismissible: true,
    size: "sm",
    className: "bg-transparent",
  };
  const formData: SubmitHandler<ICategory> = async (data) => {
    console.log(errors.name);
    
    const category: ICategory = {
      name: data.name,
      description: data.description,
      color: categoryData.color || "blue",
      icon: categoryData.icon || "bus",
    };
    sendCategory(category);
  };
  const getDataCategory = () => {
    const category = categories.filter(el => el.id === idCategory)
    const data = category[0]
    console.log(data);
    
    setcategoryData({
      name: data.name,
      description: data.description,
      color: data.color,
      icon: data.icon,
    });
    
  };
  useEffect(() => {
    if (idCategory && collectionName) {
      getDataCategory();
    }
  }, [idCategory]);

  return (
    <>
     {/* <Formik  */}
      <Formik
  initialValues={categoryData}
  validationSchema={categorySchema}
  onSubmit={(values) => {
    console.log(values);
  }}
  enableReinitialize 
>
  {({ errors, touched }) => (
    <Form>
      {/* <Field name="name" />
      {errors.name && touched.name ? <div>{"se"}</div> : null}
      <Field name="description" />
      {errors.description && touched.description ? <div>{"ds"}</div> : null} */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormikFlowbiteTextInput name="name"
                label="Name"
                placeholder="Enter your name" />
            
                <FormikFlowbiteTextInput name="description"
                label="Description"
                placeholder="Enter your description" />
        </div>
        <div className="grid grid-cols-1 ssm:grid-cols-2 gap-4 mt-4">
          <div className="flex items-center gap-2">
            <ButtonModal color={colors[categoryData.color]} text="Select a Color"
              handleClick={() => setOpenModal(true)}>
              <BiPalette size={24} />
            </ButtonModal>
          </div>
          <div className="flex items-center gap-2">
            <ButtonModal color={colors[categoryData.color]} text="Select an Icon"
              handleClick={() => setOpenModalIcon(true)}>
              {icons[categoryData.icon]}
            </ButtonModal>
          </div>
        </div>
        <Button type="submit" color={color} pill className="my-4">Save Category</Button>
    </Form>
  )}
</Formik>;
      {/* <form onSubmit={handleSubmit(formData)}>
      </form> */}
      <div>
        <ModalComponent {...options} handleClick={handleClick} controlsModal={{ openModal, setOpenModal }}>
          <ModalColorsContent handleClick={handleClickColor} />
        </ModalComponent>
        <ModalComponent {...options} handleClick={handleClick}
          controlsModal={{
            openModal: openModalIcon,
            setOpenModal: setOpenModalIcon,
          }}>
          <ModalIconsContent handleClick={handleClickIcon} />
        </ModalComponent>
      </div>
    </>
  );
};
// 188
