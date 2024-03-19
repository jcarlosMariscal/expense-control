import { Button, Table } from "flowbite-react";
import { BiEdit, BiTrash } from "react-icons/bi";
import { TDataTable } from "../../types/dataTables";

type TTableComponent = {
  data: TDataTable[];
};

export const TableComponent = ({ data }: TTableComponent) => {
  return (
    <Table>
      <Table.Head>
        <Table.HeadCell>Name</Table.HeadCell>
        <Table.HeadCell className=" block lg:hidden">
          Description
        </Table.HeadCell>
        <Table.HeadCell>Date</Table.HeadCell>
        <Table.HeadCell className="flex justify-center">Color</Table.HeadCell>
        <Table.HeadCell>Category</Table.HeadCell>
        <Table.HeadCell>Value</Table.HeadCell>
        <Table.HeadCell className="w-20">
          <span className="sr-only">Actions</span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {data.map((item, index: number) => (
          <Table.Row key={index} className="color-bg-primary color-text">
            <Table.Cell className="table-cell">{item.name}</Table.Cell>
            <Table.Cell className="table-cell lg:hidden">
              {item.description}
            </Table.Cell>
            <Table.Cell className="table-cell">{item.date}</Table.Cell>
            <Table.Cell className="table-color">
              <span className={item.color}>{item.icon}</span>
            </Table.Cell>
            <Table.Cell>{item.category}</Table.Cell>
            <Table.Cell>${item.price}</Table.Cell>
            <Table.Cell>
              <div className="flex gap-2">
                <Button pill size="xs" className="p-0 size-8" color="success">
                  <BiEdit size={22} />
                </Button>
                <Button pill size="xs" className="p-0 size-8" color="warning">
                  <BiTrash size={22} />
                </Button>
              </div>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};
