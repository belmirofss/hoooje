import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Value = ({ children }: Props) => {
  return <span className="text-7xl font-medium">{children}</span>;
};
