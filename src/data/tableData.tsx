import { BiAddToQueue, BiBellMinus, BiCamera, BiCart } from "react-icons/bi";
import { TDataTable } from "../interfaces/dataTables";
export const dataTable: TDataTable[] = [
  {
    name: "Apple MacBook Pro 17",
    date: "19/03/2024",
    description: "Producto comprado desde el viernes pasado.",
    category: "Laptop",
    price: "2999",
    icon: <BiCart size={24} />,
    color: "bg-yellow-500",
  },
  {
    name: "Apple MacBook Pro 17",
    date: "19/03/2024",
    description: "Producto comprado desde el viernes pasado.",
    category: "Laptop",
    price: "2999",
    icon: <BiAddToQueue size={24} />,
    color: "bg-purple-500",
  },
  {
    name: "Apple MacBook Pro 17",
    date: "19/03/2024",
    description: "Producto comprado desde el viernes pasado.",
    category: "Laptop",
    price: "2999",
    icon: <BiBellMinus size={24} />,
    color: "bg-lime-500",
  },
  {
    name: "Apple MacBook Pro 17",
    date: "19/03/2024",
    description: "Producto comprado desde el viernes pasado.",
    category: "Laptop",
    price: "2999",
    icon: <BiCamera size={24} />,
    color: "bg-sky-500",
  },
];
