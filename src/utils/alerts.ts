import Swal, { SweetAlertIcon } from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Response } from "../interfaces/collections.interface";

const ReactSwal = withReactContent(Swal);
export const alertTimer = (
  title: string,
  icon: SweetAlertIcon,
  timer: number
) => {
  return ReactSwal.fire({
    position: "top-end",
    icon,
    title,
    showConfirmButton: false,
    timer,
    toast: true,
    timerProgressBar: true,
    customClass: {
      popup: "color-bg-secondary color-text",
    },
  });
};
interface IConfirmChanges {
title: string, text?:string, confirmButtonText: string, confirmButtonColor:string
}
export const deleteDocument = async ({title, text = "", confirmButtonText, confirmButtonColor}:IConfirmChanges):Promise<Response | undefined> => {
  return ReactSwal.fire({
    title,
    text,
    showCancelButton: true,
    confirmButtonText,
    confirmButtonColor,
    customClass: {
      popup: "color-bg-secondary color-text",
    },
  }).then((result) => {
    if (result.isConfirmed) {
      return {success: true, message: "confirmed"}
    } else if (result.isDenied) {
      return {success: false, message: "denied"}
    }
    return {success: false, message: "canceled"}
  });
}
