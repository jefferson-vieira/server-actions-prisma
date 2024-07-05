import Page from "@/app/components/template/Page";
import { IconHome } from "@tabler/icons-react";

export default function Home() {
  return (
    <Page description="Descrição" icon={IconHome} title="Início">
      <div className="flex flex-col gap-1">
        <p>
          Exemplo aplicação Fullstack com Server Components e Server Actions no
          Next.js 14 + Prisma. Stack:
        </p>

        <ul className="list-disc list-inside">
          <li>Typescript</li>

          <li>React</li>

          <li>Next.js</li>

          <li>Tailwind CSS</li>

          <li>Prisma</li>
        </ul>
      </div>
    </Page>
  );
}
