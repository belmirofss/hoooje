import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Title = ({ children }: Props) => {
  return <h1 className="text-3xl">{children}</h1>;
};
