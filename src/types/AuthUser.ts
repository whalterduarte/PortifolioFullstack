import { Users } from "./User";

export type AuthUser = Users & {
  role: string
}