import { SectionTitle } from "../components/Pure/SectionTitle";
import { TableComponent } from "../components/Pure/TableComponent";
import { dataTable } from "../components/data/tableData";

export const ExpensesPage = () => {
  return (
    <>
      <SectionTitle className="mb-4 text-2xl">
        <span className="font-bold">Review your expenses</span>
      </SectionTitle>
      {/* <CardsResume /> */}
      <div className="overflow-x-auto w-full">
        <TableComponent data={dataTable} />
      </div>
    </>
  );
};
