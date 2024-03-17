import { Badge, Button, Card } from "flowbite-react";
import { BiRightArrowAlt } from "react-icons/bi";
import { HiClock } from "react-icons/hi";
import { BackgroundGradient } from "../Pure/BackgroundGradient";
import { TCardDashboard } from "../../types/CardTypes";

type TCardImageGradient = {
  cardData: TCardDashboard;
};
export const CardImageGradient = ({ cardData }: TCardImageGradient) => {
  const {
    title,
    description,
    buttonText,
    // buttonTo,
    status,
    icon,
    date,
    image,
  } = cardData;
  return (
    <Card className="w-full color-bg-thirty border-none relative overflow-hidden mb-4 lg:h-[17.5rem] xl:h-[20rem] 2xl:h-[25rem]">
      <div className="flex flex-col sm:flex-row  text-color">
        <div className="w-full sm:w-8/12 lg:w-full xl:w-8/12 ">
          <div className="flex items-center gap-2 text-sm">
            <span>
              {icon} {status}
            </span>{" "}
            |
            <Badge color="blue" size="xs" icon={HiClock}>
              {date}
            </Badge>
          </div>
          <h5 className="my-2 text-lg font-bold tracking-tight">{title}</h5>
          <p className="font-normal mb-5">{description}</p>
          <Button color="blue" pill>
            <div className="flex items-center gap-2">
              <span>{buttonText}</span>
              <BiRightArrowAlt size="20" />
            </div>
          </Button>
        </div>
        <div className="w-full md:w-4/12 lg:hidden xl:block flex justify-end md:flex-center">
          <img
            src={image}
            alt="Expense control"
            className="w-[7.5rem] sm:size-full z-20"
          />
          <BackgroundGradient
            size="absolute w-[18rem] h-[18rem]"
            bg="gradient-card dark:gradient-card-dark"
            blur="blur-2xl"
          />
        </div>
      </div>
    </Card>
  );
};
