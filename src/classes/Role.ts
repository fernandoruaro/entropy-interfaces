import { Deletable } from './Deletable';

export interface Role extends Deletable {
  id?: string
  workspaceId: string
  name: string
  actions: Array<RoleAction>
}

export interface RoleAction {
  type: RoleActionType
}

export enum RoleActionType {
  ManageWorkspaceMembers = "manageWorkspaceMembers"
}