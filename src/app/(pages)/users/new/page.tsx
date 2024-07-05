import { IconUser } from "@tabler/icons-react";
import Page from "@/app/components/template/Page";
import UserForm from "@/app/components/forms/UserForm";

export default function UsersPage() {
  return (
    <Page description="Criar usuário" icon={IconUser} title="Usuários">
      <UserForm />
    </Page>
  );
}
