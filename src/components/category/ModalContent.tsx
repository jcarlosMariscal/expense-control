import { Button, Label, TextInput } from "flowbite-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ICategory } from "../../interfaces/collections.interface";
import { yupResolver } from "@hookform/resolvers/yup";
import { categorySchema } from "../../hooks/validationForm";

export const ModalContent = ({ color }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICategory>({ resolver: yupResolver(categorySchema) });
  const errName = errors?.name ? "failure" : "success";
  console.log(errName);

  const sendData: SubmitHandler<ICategory> = () => {};
  return (
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
        <div>
          <Label htmlFor="color" value="Color" className="mb-2 block" />
          <TextInput
            id="color"
            placeholder="User"
            type="text"
            {...register("color")}
            helperText={
              <>
                {errors?.color && (
                  <span className="text-red-500">{errors.color.message}</span>
                )}
              </>
            }
          />
        </div>
        <div>
          <Label htmlFor="icon" value="Icon" className="mb-2 block" />
          <TextInput
            id="icon"
            placeholder="User"
            type="text"
            {...register("icon")}
            helperText={
              <>
                {errors?.icon && (
                  <span className="text-red-500">{errors.icon.message}</span>
                )}
              </>
            }
          />
        </div>
      </div>
      <Button type="submit" color={color} pill>
        Save Category
      </Button>
    </form>
  );
};
