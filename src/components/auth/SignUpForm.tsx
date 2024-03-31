import { Button, Label, TextInput } from "flowbite-react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { regexEmail, regexPassword } from "../../helpers/regex";
import { AuthContext } from "../../context/AuthContext";
import { LoginFormValues } from "../../interfaces/auth.interface";
import { alertTimer } from "../../utils/alerts";
export const SignUpForm = () => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const { SignUpWithEmail, status, result } = authContext;

  const [formValues, setFormValues] = useState<LoginFormValues>({
    email: "",
    password: "",
  });
  const [errEmail, setErrEmail] = useState(false);
  const [errPass, setErrPass] = useState(false);

  const errColorEmail = errEmail ? "failure" : "success";
  const errColorPass = errPass ? "failure" : "success";
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name == "email") setErrEmail(!regexEmail.test(value));
    if (name == "password") setErrPass(!regexPassword.test(value));

    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const signUp = async (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password } = formValues;

    if (!email) setErrEmail(true);
    if (!password) setErrPass(true);

    SignUpWithEmail({ email, password });

    if (result) {
      alertTimer("Registrado", "success", 1500);
      navigate("/login");
    }
  };
  return (
    <form className="flex flex-col gap-2" onSubmit={signUp}>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" color={errColorEmail} value="Email" />
        </div>
        <TextInput
          id="email"
          placeholder="user@gmail.com"
          required
          color={errColorEmail}
          name="email"
          type="email"
          value={formValues.email}
          onChange={handleChange}
          helperText={<>{errEmail && <span>Correo inválido.</span>}</>}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="pass" color={errColorPass} value="Password" />
        </div>
        <TextInput
          id="pass"
          placeholder="password"
          required
          color={errColorPass}
          name="password"
          type="password"
          value={formValues.password}
          onChange={handleChange}
          helperText={
            <>
              {errPass && (
                <span>
                  La contraseña debe tener mínimo 5 caracteres, al menos una
                  letra y al menos un digito
                </span>
              )}
            </>
          }
        />
      </div>
      <Button
        type="submit"
        color="success"
        disabled={errEmail || errPass ? true : false}
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
// 119
// const { user, signIn, signOut } = useContext(UserContext);
