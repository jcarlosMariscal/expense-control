import { Button, Table } from "flowbite-react";
import { BiEdit, BiTrash } from "react-icons/bi";
import { colors } from "../data/categoriesColor";
import icons from "../data/categoriesIcons";
import { ICategory } from "../../interfaces/collections.interface";

type TTableComponent = {
  data: ICategory[] | undefined;
  bg: string;
  showModal: (param: string) => void;
  showConfirmAlert: (param: string, param2:string) => void;
};

export const TableCategories = ({ data, bg, showModal, showConfirmAlert }: TTableComponent) => {
  const categoryColor = (color: keyof typeof colors) => {
    const colorCategory: keyof typeof colors = color;
    const category = colors[colorCategory];
    return <span style={{ background: category.strong }}></span>;
  };
  const categoryIcon = (icon: keyof typeof icons) => {
    const Icono = icons[icon];
    return Icono;
  };
  const background =
    bg === "lime"
      ? "bg-lime-300 dark:bg-lime-600 dark:text-white"
      : "bg-yellow-300 dark:bg-yellow-600 dark:text-white";
  return (
    <div className="overflow-x-auto w-full">
      <Table>
        <Table.Head>
          <Table.HeadCell className={`${background}`}>Name</Table.HeadCell>
          <Table.HeadCell className={`${background}`}>Icon</Table.HeadCell>
          <Table.HeadCell className={`${background} flex justify-center`}>
            Color
          </Table.HeadCell>
          <Table.HeadCell className={`${background} w-20`}>
            <span className="sr-only">Actions</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y b">
          {data &&
            data.map((item, index: number) => (
              <Table.Row key={index} className="color-bg-primary color-text">
                <Table.Cell className="table-cell">{item.name}</Table.Cell>
                <Table.Cell className="table-cell">
                  {categoryIcon(item.icon)}
                </Table.Cell>
                <Table.Cell className="table-color">
                  {categoryColor(item.color)}
                </Table.Cell>
                <Table.Cell>
                  <div className="flex gap-2">
                    <Button
                      pill
                      size="xs"
                      className="p-0 size-8"
                      color={bg}
                      onClick={() => showModal(item.id as string)}
                    >
                      <BiEdit size={18} />
                    </Button>
                    <Button pill size="xs" className="p-0 size-8" color="red"
                      onClick={() => showConfirmAlert(item.id as string, item.name as string)}>
                      <BiTrash size={18} />
                    </Button>
                  </div>
                </Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
    </div>
  );
};
