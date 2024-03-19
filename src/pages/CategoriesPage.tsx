import { Tabs } from "flowbite-react";
import { TableCategories } from "../components/Pure/TableCategories";
import { dataTable } from "../components/data/tableData";

export const CategoriesPage = () => {
  return (
    <Tabs aria-label="Default tabs" style="underline">
      <Tabs.Item active title="Category Income">
        <TableCategories data={dataTable} />
      </Tabs.Item>
      <Tabs.Item title="Category Expenses">
        <TableCategories data={dataTable} />
      </Tabs.Item>
    </Tabs>
  );
};
