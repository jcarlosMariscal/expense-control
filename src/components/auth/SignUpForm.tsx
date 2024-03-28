import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebaseConfig";
import { Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { alertTimer } from "../../utils/alerts";
import { useNavigate } from "react-router-dom";
import { regexEmail, regexPassword } from "../../helpers/regex";
type FormValues = {
  email: string;
  password: string;
};

export const SignUpForm = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState<FormValues>({
    email: "",
    password: "",
  });
  const [errEmail, setErrEmail] = useState(false);
  const [errPass, setErrPass] = useState(false);
  const [errForm, setErrForm] = useState(false);

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
  const SignupWithEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password } = formValues;
    const timer = 1500;

    if (!email) setErrEmail(true);
    if (!password) setErrPass(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      console.log(user);

      alertTimer("Registrado", "success", timer);
      setTimeout(() => navigate("/login"), timer);
    } catch (error) {
      console.log(error);
      setErrForm(true);
    }
  };
  return (
    <form className="flex flex-col gap-2" onSubmit={SignupWithEmail}>
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
        disabled={errEmail || errPass || errForm ? true : false}
      >
        Sign Up
      </Button>
      {errForm && (
        <p className="text-red-500 text-sm">
          Parece que ha ocurrido un error al intentar registrarse. Intente de
          nuevo más tarde.
        </p>
      )}
    </form>
  );
};
