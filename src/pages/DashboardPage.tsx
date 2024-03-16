import { Badge, Button, Card } from "flowbite-react";
import { BackgroundGradient } from "../components/Pure/BackgroundGradient";
import expenseControl from "@/assets/images/expense-control.png";
import { HiClock } from "react-icons/hi";
import { BiRightArrowAlt } from "react-icons/bi";

import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const cardsSup = [
  {
    title: "Noteworthy technology acquisitions 2021",
    color: "bg-blue-400",
    border: "!border-blue-400",
    icon: "👨‍⚕️",
  },
  {
    title: "Noteworthy technology acquisitions 2021",
    color: "bg-green-400",
    border: "!border-green-400",
    icon: "✈️",
  },
  {
    title: "Noteworthy technology acquisitions 2021",
    color: "bg-orange-400",
    border: "!border-orange-400",
    icon: "🪙",
  },
  {
    title: "Noteworthy technology acquisitions 2021",
    color: "bg-purple-400",
    border: "!border-purple-400",
    icon: "🥗",
  },
];

export const DashboardPage = () => {
  return (
    <>
      <div className="mb-4">
        <h2 className="text-2xl">
          <span className="opacity-50">Welcome,</span>{" "}
          <span className="font-bold">Carlos RM</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-4">
        {cardsSup.map((card, index) => (
          <Card
            key={index}
            className={`border-none ${card.border} color-bg-thirty cursor-pointer color-text relative`}
            style={{ borderLeft: "5px solid" }}
          >
            <h5 className="text-sm tracking-tight mr-0 ssm:mr-6">
              {card.title}
            </h5>
            <span
              className={`hidden ssm:flex flex-center absolute top-5 right-1 w-10 h-10 ${card.color} rounded-full text-2xl`}
            >
              {card.icon}
            </span>
          </Card>
        ))}
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-7">
          <Card className="w-full color-bg-thirty border-none relative overflow-hidden">
            <div className="flex text-color">
              <div className="w-8/12">
                <div className="flex items-center gap-2 text-sm">
                  <span>🔥 Available Now</span> |
                  <Badge color="blue" size="xs" icon={HiClock}>
                    3 days ago
                  </Badge>
                </div>
                <h5 className="my-2 text-lg font-bold tracking-tight">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal mb-5">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <Button color="blue" pill>
                  <div className="flex items-center gap-2">
                    <span>Read more</span>
                    <BiRightArrowAlt size="20" />
                  </div>
                </Button>
              </div>
              <div className="w-4/12 flex-center">
                <a
                  href="https://www.freepik.com/free-vector/tax-preparation-concept-illustration_38686713.htm#query=cost%20control&position=48&from_view=keyword&track=ais&uuid=9d898a52-caa8-4678-adb9-539e7e9891f7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="z-10 w-full"
                >
                  <img
                    src={expenseControl}
                    alt="Expense control"
                    className="size-full"
                  />
                </a>
                <BackgroundGradient
                  size="absolute w-[18rem] h-[18rem]"
                  bg="gradient-card dark:gradient-card-dark"
                  blur="blur-2xl"
                />
              </div>
            </div>
          </Card>
          <Card className="w-full color-bg-thirty border-none relative overflow-hidden mt-5">
            <div className="flex text-color">
              <div className="w-8/12">
                <div className="flex items-center gap-2 text-sm">
                  <span>🔥 Available Now</span> |
                  <Badge color="blue" size="xs" icon={HiClock}>
                    3 days ago
                  </Badge>
                </div>
                <h5 className="my-2 text-lg font-bold tracking-tight">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal mb-5">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <Button color="blue" pill>
                  <div className="flex items-center gap-2">
                    <span>Read more</span>
                    <BiRightArrowAlt size="20" />
                  </div>
                </Button>
              </div>
              <div className="w-4/12 flex-center">
                <a
                  href="https://www.freepik.com/free-vector/tax-preparation-concept-illustration_38686713.htm#query=cost%20control&position=48&from_view=keyword&track=ais&uuid=9d898a52-caa8-4678-adb9-539e7e9891f7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="z-10 w-full"
                >
                  <img src={expenseControl} alt="Expense control" />
                </a>
                <BackgroundGradient
                  size="w-[18rem] h-[18rem]"
                  bg="gradient-card dark:gradient-card-dark"
                  blur="blur-2xl"
                />
              </div>
            </div>
          </Card>
          <Card className="w-full color-bg-thirty border-none relative overflow-hidden mt-5">
            <div className="flex text-color">
              <div className="w-8/12">
                <div className="flex items-center gap-2 text-sm">
                  <span>🔥 Available Now</span> |
                  <Badge color="blue" size="xs" icon={HiClock}>
                    3 days ago
                  </Badge>
                </div>
                <h5 className="my-2 text-lg font-bold tracking-tight">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal mb-5">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <Button color="blue" pill>
                  <div className="flex items-center gap-2">
                    <span>Read more</span>
                    <BiRightArrowAlt size="20" />
                  </div>
                </Button>
              </div>
              <div className="w-4/12 flex-center">
                <a
                  href="https://www.freepik.com/free-vector/tax-preparation-concept-illustration_38686713.htm#query=cost%20control&position=48&from_view=keyword&track=ais&uuid=9d898a52-caa8-4678-adb9-539e7e9891f7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="z-10 w-full"
                >
                  <img src={expenseControl} alt="Expense control" />
                </a>
                <BackgroundGradient
                  size="w-[18rem] h-[18rem]"
                  bg="gradient-card dark:gradient-card-dark"
                  blur="blur-2xl"
                />
              </div>
            </div>
          </Card>
          <Card className="w-full color-bg-thirty border-none relative overflow-hidden mt-5">
            <div className="flex text-color">
              <div className="w-8/12">
                <div className="flex items-center gap-2 text-sm">
                  <span>🔥 Available Now</span> |
                  <Badge color="blue" size="xs" icon={HiClock}>
                    3 days ago
                  </Badge>
                </div>
                <h5 className="my-2 text-lg font-bold tracking-tight">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal mb-5">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <Button color="blue" pill>
                  <div className="flex items-center gap-2">
                    <span>Read more</span>
                    <BiRightArrowAlt size="20" />
                  </div>
                </Button>
              </div>
              <div className="w-4/12 flex-center">
                <a
                  href="https://www.freepik.com/free-vector/tax-preparation-concept-illustration_38686713.htm#query=cost%20control&position=48&from_view=keyword&track=ais&uuid=9d898a52-caa8-4678-adb9-539e7e9891f7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="z-10 w-full"
                >
                  <img src={expenseControl} alt="Expense control" />
                </a>
                <BackgroundGradient
                  size="w-[18rem] h-[18rem]"
                  bg="gradient-card dark:gradient-card-dark"
                  blur="blur-2xl"
                />
              </div>
            </div>
          </Card>
          <Card className="w-full color-bg-thirty border-none relative overflow-hidden mt-5">
            <div className="flex text-color">
              <div className="w-8/12">
                <div className="flex items-center gap-2 text-sm">
                  <span>🔥 Available Now</span> |
                  <Badge color="blue" size="xs" icon={HiClock}>
                    3 days ago
                  </Badge>
                </div>
                <h5 className="my-2 text-lg font-bold tracking-tight">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal mb-5">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <Button color="blue" pill>
                  <div className="flex items-center gap-2">
                    <span>Read more</span>
                    <BiRightArrowAlt size="20" />
                  </div>
                </Button>
              </div>
              <div className="w-4/12 flex-center">
                <a
                  href="https://www.freepik.com/free-vector/tax-preparation-concept-illustration_38686713.htm#query=cost%20control&position=48&from_view=keyword&track=ais&uuid=9d898a52-caa8-4678-adb9-539e7e9891f7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="z-10 w-full"
                >
                  <img src={expenseControl} alt="Expense control" />
                </a>
                <BackgroundGradient
                  size="w-[18rem] h-[18rem]"
                  bg="gradient-card dark:gradient-card-dark"
                  blur="blur-2xl"
                />
              </div>
            </div>
          </Card>
        </div>
        <div className="col-span-12 lg:col-span-5">
          <div className="h-60">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart width={150} height={30} data={data}>
                <Bar dataKey="uv" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="h-60 mt-5">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart width={150} height={30} data={data}>
                <Bar dataKey="uv" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
};
