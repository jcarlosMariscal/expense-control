import * as yup from "yup";
const authMessages = {
  req: "Este campo es obligatorio",
  mail: "Debes introducir una dirección correcta",
  pass: "La contraseña debe tener mínimo 6 caracteres, al menos una letra y al menos un digito",
};
export const authSchema = yup
  .object()
  .shape({
    email: yup.string().email(authMessages.mail).required(authMessages.req),
    password: yup
      .string()
      .min(6, authMessages.pass)
      .required(authMessages.req)
      .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/, authMessages.pass),
  })
  .required();
