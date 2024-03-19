import { ReactNode } from "react";

type TSectionTitle = {
  className: string;
  children: ReactNode;
};

export const SectionTitle = ({ className, children }: TSectionTitle) => {
  return <h2 className={className}>{children}</h2>;
};
