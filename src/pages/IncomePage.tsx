import { SectionTitle } from "../components/Pure/SectionTitle";
import { TableComponent } from "../components/IncomeExpenseComponents/TableComponent";
import { useContext, useEffect, useState } from "react";
import { getAllCollection } from "../firebase/firestore.service";
import { AuthContext } from "../context/AuthContext";
import { ICollectionMain } from "../interfaces/collections.interface";

export const IncomePage = () => {
  const context = useContext(AuthContext);
  const { user } = context;

  const [collectionData, setCollectionData] = useState<ICollectionMain[] | null>(null);
  const getData = async () => {
    if (!user) return;
    const response = await getAllCollection("incomes", user?.uid, "incomesData");
    if (!response.success) setCollectionData(null);
    setCollectionData(response.data as ICollectionMain[]);
    
  }
  useEffect(() => {
    getData();
  }, [])
  
  return (
    <>
      <SectionTitle className="mb-4 text-2xl">
        <span className="font-bold">Review your income</span>
      </SectionTitle>
      {/* <CardsResume /> */}
      <TableComponent data={collectionData} />
    </>
  );
};
