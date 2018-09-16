import { Deletable } from './Deletable';

export class Role extends Deletable {
  id?: string
  workspaceId: string
  name: string
  actions: Array<RoleAction>
}

export class RoleAction {
  type: RoleActionType
}

export enum RoleActionType {
  ManageWorkspaceMembers = "manageWorkspaceMembers"
}