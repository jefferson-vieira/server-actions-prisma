import { IconUser } from "@tabler/icons-react";
import Page from "@/app/components/template/Page";
import EditUser from "./EditUser";

export default function UsersPage({ params }: { params: { id: string } }) {
  return (
    <Page description="Editar usuário" icon={IconUser} title="Usuários">
      <EditUser id={params.id} />
    </Page>
  );
}
