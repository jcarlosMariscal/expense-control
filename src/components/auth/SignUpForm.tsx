import { Button, Label, TextInput } from "flowbite-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../hooks/validationForm";
import { alertTimer } from "../../utils/alerts";
import { IRegisterForm } from "../../interfaces/auth.interface";
export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterForm>({ resolver: yupResolver(registerSchema) });
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const [formError, setFormError] = useState<string>(
    "Parece que ha ocurrido un error al intentar registrarse. Intente de más tarde."
  );
  const { SignUpWithEmail, status } = authContext;

  const errEmail = errors?.email ? "failure" : "success";
  const errPass = errors?.password ? "failure" : "success";
  const signUp: SubmitHandler<IRegisterForm> = async (data) => {
    const { name, last_name, email, password } = data;
    const { success, error } = await SignUpWithEmail({
      name,
      last_name,
      email,
      password,
    });
    if (success) {
      navigate("/login");
      alertTimer("Registro correcto", "success", 1500);
    } else {
      if (error !== undefined) setFormError(error);
    }
  };
  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit(signUp)}>
      <div>
        <Label htmlFor="name" value="Name" className="mb-2 block" />
        <TextInput
          id="name"
          placeholder="User"
          type="text"
          color={errEmail}
          {...register("name")}
        />
      </div>
      <div>
        <Label htmlFor="last_name" value="Last Name" className="mb-2 block" />
        <TextInput
          id="last_name"
          placeholder="Last name"
          type="text"
          color={errEmail}
          {...register("last_name")}
        />
      </div>
      <div>
        <Label htmlFor="email" value="Email" className="mb-2 block" />
        <TextInput
          id="email"
          placeholder="user@gmail.com"
          type="email"
          color={errEmail}
          {...register("email")}
          helperText={
            <>
              {errors?.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </>
          }
        />
      </div>
      <div>
        <Label htmlFor="pass" value="Password" className="mb-2 block" />
        <TextInput
          id="pass"
          type="password"
          color={errPass}
          {...register("password")}
          helperText={
            <>
              {errors?.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
            </>
          }
        />
      </div>
      <Button
        type="submit"
        color="success"
        disabled={errors?.email || errors?.password ? true : false}
      >
        Sign Up
      </Button>
      {status && <p className="text-red-500 text-sm">{formError}</p>}
    </form>
  );
};
