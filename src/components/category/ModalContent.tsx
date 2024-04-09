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

type TModalComponent = {
  color: string;
};
export const ModalContent = ({ color }: TModalComponent) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICategory>({ resolver: yupResolver(categorySchema) });
  const [openModal, setOpenModal] = useState(false);
  const [openModalIcon, setOpenModalIcon] = useState(false);
  const [selectedColor, setSelectedColor] =
    useState<keyof typeof colors>("blue");
  const [selectedIcon, setSelectedIcon] = useState<keyof typeof icons>("work");
  const errName = errors?.name ? "failure" : "success";
  console.log(errName);

  const sendData: SubmitHandler<ICategory> = () => {};
  const handleClick = () => {};
  return (
    <>
      <form action="" onSubmit={handleSubmit(sendData)}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name" value="Name" className="mb-2 block" />
            <TextInput
              id="name"
              placeholder="Name"
              type="text"
              {...register("name")}
              helperText={
                <>
                  {errors?.name && (
                    <span className="text-red-500">{errors.name.message}</span>
                  )}
                </>
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
                <>
                  {errors?.description && (
                    <span className="text-red-500">
                      {errors.description.message}
                    </span>
                  )}
                </>
              }
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2 h-12">
            <TextInput
              id="color"
              placeholder="User"
              type="text"
              {...register("color")}
              className="hidden"
              value={selectedColor}
            />
            <Button
              pill
              className={`size-10 p-0`}
              style={{
                background: colors[selectedColor].strong,
                color: colors[selectedColor].light,
              }}
              onClick={() => setOpenModal(true)}
            >
              <BiPalette size={24} />
            </Button>
            <span
              className="color-text cursor-pointer"
              onClick={() => setOpenModal(true)}
            >
              Select a color
            </span>
          </div>
          <div className="flex items-center gap-2 h-12">
            <TextInput
              id="icon"
              placeholder="User"
              type="text"
              {...register("icon")}
              className="hidden"
            />
            <Button
              pill
              className={`size-10`}
              style={{
                background: colors[selectedColor].strong,
                // color: colors[selectedColor].strong,
              }}
              onClick={() => setOpenModalIcon(true)}
            >
              {icons[selectedIcon]}
            </Button>
            <span
              className="color-text cursor-pointer"
              onClick={() => setOpenModalIcon(true)}
            >
              Select a color
            </span>
          </div>
        </div>
        <Button type="submit" color={color} pill>
          Save Category
        </Button>
      </form>
      <ModalComponent
        controlsModal={{ openModal, setOpenModal }}
        footer={false}
        header={false}
        handleClick={handleClick}
        color={"red"}
        dismissible
        size="sm"
        className="bg-transparent"
      >
        <div className="flex flex-wrap  gap-1">
          {Object.entries(colors).map(([colorName, { strong }]) => (
            <div
              key={colorName}
              className="size-10 rounded-full"
              style={{
                backgroundColor: strong,
                cursor: "pointer",
              }}
              onClick={() => {
                setSelectedColor(colorName as keyof typeof colors);
                setOpenModal(false);
              }}
            ></div>
          ))}
        </div>
      </ModalComponent>
      <ModalComponent
        controlsModal={{
          openModal: openModalIcon,
          setOpenModal: setOpenModalIcon,
        }}
        footer={false}
        header={false}
        handleClick={handleClick}
        color={"red"}
        dismissible
        size="sm"
        className="bg-transparent"
      >
        <div className="flex flex-wrap  gap-1">
          {Object.entries(icons).map(([iconName, iconComponent]) => (
            <div
              key={iconName}
              className="size-10 rounded-full"
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                setSelectedIcon(iconName as keyof typeof icons);
                setOpenModalIcon(false);
              }}
            >
              <span className="color-text">{iconComponent}</span>
            </div>
          ))}
        </div>
      </ModalComponent>
    </>
  );
};
