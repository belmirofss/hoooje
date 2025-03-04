import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Page = ({ children }: Props) => {
  return (
    <div className="flex flex-1 flex-col justify-center gap-8">
      <div>{children}</div>

      <Link href="/">Voltar</Link>
    </div>
  );
};
