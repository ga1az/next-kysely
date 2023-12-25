import { Generated } from "kysely";

export interface Database {
  user: UserTable;
}

export interface UserTable {
  id: Generated<number>;
  name: string;
  email: string;
  created_at: Date;
}
