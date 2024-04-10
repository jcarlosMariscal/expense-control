import * as yup from "yup";
const authMessages = {
  req: "Este campo es obligatorio",
  name: "Debes introducir un nombre",
  last_name: "Debes introducir apellidos",
  mail: "Debes introducir una dirección correcta",
  pass: "La contraseña debe tener mínimo 6 caracteres, al menos una letra y al menos un digito",
  select: "Debe completar el campo de selección para continuar.",
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
export const registerSchema = yup
  .object()
  .shape({
    name: yup.string().required(authMessages.req),
    last_name: yup.string().required(authMessages.req),
    email: yup.string().email(authMessages.mail).required(authMessages.req),
    password: yup
      .string()
      .min(6, authMessages.pass)
      .required(authMessages.req)
      .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/, authMessages.pass),
  })
  .required();
export const categorySchema = yup
  .object()
  .shape({
    id: yup.string(),
    name: yup.string().required(authMessages.req),
    description: yup.string().required(authMessages.req),
  })
  .required();
