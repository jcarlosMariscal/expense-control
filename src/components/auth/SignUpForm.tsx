import { Button, Label, TextInput } from "flowbite-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginFormValues as IAuth } from "../../interfaces/auth.interface";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { authSchema } from "../../hooks/validationForm";
export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuth>({ resolver: yupResolver(authSchema) });
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const { SignUpWithEmail, status } = authContext;

  const errEmail = errors?.email ? "failure" : "success";
  const errPass = errors?.password ? "failure" : "success";
  const signUp: SubmitHandler<IAuth> = (data) => {
    const { email, password } = data;
    SignUpWithEmail({ email, password });
    navigate("/login");
  };
  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit(signUp)}>
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
      {status && (
        <p className="text-red-500 text-sm">
          Parece que ha ocurrido un error al intentar registrarse. Intente de
          nuevo más tarde.
        </p>
      )}
    </form>
  );
};
