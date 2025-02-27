import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Page = ({ children }: Props) => {
  return <div className="h-full flex flex-col justify-center">{children}</div>;
};
