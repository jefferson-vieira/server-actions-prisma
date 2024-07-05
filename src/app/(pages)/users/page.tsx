import { IconUser } from "@tabler/icons-react";
import Page from "@/app/components/template/Page";

import CreateUserAction from "./CreateAction";
import UsersList from "./List";

export default function UsersPage() {
  return (
    <Page description="Cadastro de usuários" icon={IconUser} title="Usuários">
      <div className="flex justify-end">
        <CreateUserAction />
      </div>

      <UsersList />
    </Page>
  );
}
