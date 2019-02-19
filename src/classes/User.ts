import { RoleAction } from "./Role";
import { Workspace } from "./Workspace";

export interface User {
  email: string
  familyName: string
  givenName: string
  lastAuthorization: Date
  name: string
  picture: string
  sub: string
}

export interface Me extends User {
  allowedActions?: Array<RoleAction>
  workspaces?: Array<Workspace>
}