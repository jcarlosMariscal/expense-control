import { Button, Label, TextInput } from "flowbite-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ICategory } from "../../interfaces/collections.interface";
import { yupResolver } from "@hookform/resolvers/yup";
import { categorySchema } from "../../hooks/validationForm";
import { BiPalette } from "react-icons/bi";
import { colors } from "../data/categoriesColor";
import { ModalComponent } from "../Pure/ModalComponent";
import { useState } from "react";
import icons from "../data/categoriesIcons";
import { ModalColorsContent } from "./ModalColorsContent";
import { ModalIconsContent } from "./ModalIconsContent";
import { ButtonModal } from "./ButtonModal";

type TModalComponent = {
  color: string;
};
export const ModalContent = ({ color }: TModalComponent) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICategory>({ resolver: yupResolver(categorySchema) });
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openModalIcon, setOpenModalIcon] = useState<boolean>(false);
  const [selectedColor, setSelectedColor] =
    useState<keyof typeof colors>("blue");
  const [selectedIcon, setSelectedIcon] = useState<keyof typeof icons>("bus");

  const sendData: SubmitHandler<ICategory> = () => {};
  const handleClick = () => {};
  const handleClickColor = (colorName: keyof typeof colors) => {
    setSelectedColor(colorName);
    setOpenModal(false);
  };
  const handleClickIcon = (iconName: keyof typeof icons) => {
    setSelectedIcon(iconName);
    setOpenModalIcon(false);
  };
  const options = {
    footer: false,
    header: false,
    dismissible: true,
    size: "sm",
    className: "bg-transparent",
  };
  return (
    <>
      <form onSubmit={handleSubmit(sendData)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name" value="Name" className="mb-2 block" />
            <TextInput
              id="name"
              placeholder="Name"
              type="text"
              {...register("name")}
              helperText={
                errors?.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )
              }
            />
          </div>
          <div>
            <Label
              htmlFor="description"
              value="Description"
              className="mb-2 block"
            />
            <TextInput
              id="description"
              placeholder="Description"
              type="text"
              {...register("description")}
              helperText={
                errors?.description && (
                  <p className="text-red-500">{errors.description.message}</p>
                )
              }
            />
          </div>
        </div>
        <div className="grid grid-cols-1 ssm:grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <TextInput
              placeholder="User"
              type="text"
              {...register("color")}
              className="hidden"
              value={selectedColor}
            />
            <ButtonModal
              color={colors[selectedColor]}
              text="Select a Color"
              handleClick={() => setOpenModal(true)}
            >
              <BiPalette size={24} />
            </ButtonModal>
          </div>
          <div className="flex items-center gap-2 h-12">
            <TextInput
              placeholder="User"
              type="text"
              {...register("icon")}
              className="hidden"
              value={selectedIcon}
            />
            <ButtonModal
              color={colors[selectedColor]}
              text="Select an Icon"
              handleClick={() => setOpenModalIcon(true)}
            >
              {icons[selectedIcon]}
            </ButtonModal>
          </div>
        </div>
        <Button type="submit" color={color} pill className="my-4">
          Save Category
        </Button>
      </form>
      <div>
        <ModalComponent
          controlsModal={{ openModal, setOpenModal }}
          handleClick={handleClick}
          {...options}
        >
          <ModalColorsContent handleClick={handleClickColor} />
        </ModalComponent>
        <ModalComponent
          controlsModal={{
            openModal: openModalIcon,
            setOpenModal: setOpenModalIcon,
          }}
          handleClick={handleClick}
          {...options}
        >
          <ModalIconsContent handleClick={handleClickIcon} />
        </ModalComponent>
      </div>
    </>
  );
};
// 188
