import { Button, Modal } from "flowbite-react";
import { ICategory } from "../../interfaces/collections.interface";
import { categorySchema } from "../../hooks/validationForm";
import { BiPalette } from "react-icons/bi";
import { colors } from "../../data/categoriesColor";
import { useState } from "react";
import icons from "../../data/categoriesIcons";
import { ModalColorsContent } from "./ModalColorsContent";
import { ModalIconsContent } from "./ModalIconsContent";
import { ButtonModal } from "./ButtonModal";
import {Formik, Form} from 'formik';
import { FormikFlowbiteTextInput } from "../Pure/FormikFlowbiteTextInput";

type TProps = {
  color: string;
  sendCategory: (param: ICategory) => void;
  initialData: ICategory
};
export const ModalContent = ({ color, sendCategory, initialData }: TProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openModalIcon, setOpenModalIcon] = useState<boolean>(false);
  const [categoryData, setcategoryData] = useState<ICategory>(initialData);

  const handleClickColor = (colorName: keyof typeof colors) => {
    setcategoryData({ ...categoryData, color: colorName });
    setOpenModal(false);
  };
  const handleClickIcon = (iconName: keyof typeof icons) => {
    setcategoryData({ ...categoryData, icon: iconName });
    setOpenModalIcon(false);
  };
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setcategoryData({ ...categoryData, [name]: value });
  };
  const options = {
    size: "sm",
    className: "bg-transparent",
  };
  const formData = (data:ICategory) => {
    const category: ICategory = {
      name: data.name,
      description: data.description,
      color: categoryData.color || "blue",
      icon: categoryData.icon || "bus",
    };
    sendCategory(category);
  };

  return (
    <>
      <Formik initialValues={categoryData} validationSchema={categorySchema} enableReinitialize
        onSubmit={(values) => formData(values)}>
        <Form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormikFlowbiteTextInput name="name" label="Name" placeholder="Enter a name"
              handleChange={handleChange} />
            <FormikFlowbiteTextInput name="description" label="Description" placeholder="Enter a description"
              handleChange={handleChange} />
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
    </Formik>;
    <div>
      <Modal dismissible show={openModal} {...options} onClose={() => setOpenModal(false)}>
        <Modal.Body>
          <ModalColorsContent handleClick={handleClickColor} />
        </Modal.Body>
      </Modal>
      <Modal dismissible show={openModalIcon} {...options} onClose={() => setOpenModalIcon(false)}>
        <Modal.Body>
          <ModalIconsContent handleClick={handleClickIcon} />
        </Modal.Body>
      </Modal>
      </div>
    </>
  );
};
// 188
