import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Page = ({ children }: Props) => {
  return <div className="flex flex-1 flex-col justify-center">{children}</div>;
};
