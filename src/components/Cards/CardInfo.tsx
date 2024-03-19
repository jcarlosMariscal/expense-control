import { Badge, Button, Card } from "flowbite-react";
import { BiRightArrowAlt } from "react-icons/bi";
import { HiClock } from "react-icons/hi";
import { TCardDashboard } from "../../types/CardTypes";

type TCardInfo = {
  cardData: TCardDashboard;
};
export const CardInfo = ({ cardData }: TCardInfo) => {
  const { title, description, buttonText, status, icon, date } = cardData;
  return (
    <Card className="card-info">
      <div className="card-span">
        <span>
          {icon} {status} |
        </span>
        <Badge color="blue" size="xs" icon={HiClock}>
          {date}
        </Badge>
      </div>
      <div className="w-full">
        <h5 className="card-title">{title}</h5>
        <p className="card-description">
          {description}
          <span className="hidden sm:inline lg:hidden xl:inline">
            {description}
          </span>
        </p>
        <p className="text-sm font-normal mb-5">{description}</p>
      </div>
      <div className="absolute left-4 bottom-4">
        <Button color="blue" pill>
          <div className="flex items-center gap-2">
            <span>{buttonText}</span>
            <BiRightArrowAlt size="20" />
          </div>
        </Button>
      </div>
    </Card>
  );
};
