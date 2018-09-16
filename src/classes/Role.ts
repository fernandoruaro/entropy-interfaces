import { Deletable } from './Deletable';

export class Role extends Deletable {
  id?: string
  workspaceId: string
  actions: Array<RoleAction>
}

export class RoleAction {
  type: RoleActionType
}

enum RoleActionType {
  ManageWorkspaceMembers = "manageWorkspaceMembers"
}