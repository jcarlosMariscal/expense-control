import { Button, Table } from "flowbite-react";
import { BiEdit, BiTrash } from "react-icons/bi";
import { TCategory } from "../../interfaces/collections.interface";
import { colors } from "../data/categoriesColor";
import icons from "../data/categoriesIcons";

type TTableComponent = {
  data: TCategory[] | undefined;
};

export const TableCategories = ({ data }: TTableComponent) => {
  const categoryColor = (color: keyof typeof colors) => {
    const colorCategory: keyof typeof colors = color;
    const category = colors[colorCategory];
    return <span style={{ background: category.strong }}></span>;
  };
  const categoryIcon = (icon: keyof typeof icons) => {
    const Icono = icons[icon];
    console.log(icon);
    return Icono;
  };
  return (
    <div className="overflow-x-auto w-full">
      <Table>
        <Table.Head>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Icon</Table.HeadCell>
          <Table.HeadCell className="flex justify-center">Color</Table.HeadCell>
          <Table.HeadCell className="w-20">
            <span className="sr-only">Actions</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
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
                      color="success"
                    >
                      <BiEdit size={22} />
                    </Button>
                    <Button
                      pill
                      size="xs"
                      className="p-0 size-8"
                      color="warning"
                    >
                      <BiTrash size={22} />
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
