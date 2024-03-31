import { TCardDashboard, TcardSimple } from "../../interfaces/CardTypes";
import expenseControl from "@/assets/images/expense-control.png";

export const cardsSup: TcardSimple[] = [
  {
    title: "Noteworthy technology acquisitions 2021",
    color: "bg-blue-400",
    className: "!border-blue-400",
    icon: "👨‍⚕️",
  },
  {
    title: "Noteworthy technology acquisitions 2021",
    color: "bg-green-400",
    className: "!border-green-400",
    icon: "✈️",
  },
  {
    title: "Noteworthy technology acquisitions 2021",
    color: "bg-orange-400",
    className: "!border-orange-400",
    icon: "🪙",
  },
  {
    title: "Noteworthy technology acquisitions 2021",
    color: "bg-purple-400",
    className: "!border-purple-400",
    icon: "🥗",
  },
];

export const card: TCardDashboard = {
  title: "Noteworthy technology acquisitions 2021",
  description:
    "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. ",
  buttonTo: "/",
  buttonText: "Read more",
  image: expenseControl,
  status: "Available Now",
  icon: "🔥",
  date: "3 days ago",
};
export const cardsDashboard: TCardDashboard[] = [card, card];
