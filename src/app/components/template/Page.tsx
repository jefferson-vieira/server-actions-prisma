import type { ReactNode } from "react";

import type { Props as HeaderProps } from "@/app/components/template/Header";
import Header from "@/app/components/template/Header";

interface OwnProps {
  children: ReactNode;
}

type Props = OwnProps & HeaderProps;

export default function Page({ children, ...headerProps }: Props) {
  return (
    <main className="flex flex-col flex-1 gap-10 p-7">
      <Header {...headerProps} />

      {children}
    </main>
  );
}
