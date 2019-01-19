import { Deletable } from './Deletable';

export interface Role extends Deletable {
  id?: string
  workspaceId: string
  name: string
  actions: Array<RoleAction>
}

export interface RoleAction {
  type: RoleActionType
  resourceId?: string
}

export enum RoleActionType {
  ManageWorkspace = "manageWorkspace",
  ManageWorkspaceMembers = "manageWorkspaceMembers",
  ManageEntities = "manageEntities",
  ReadEntity = "readEntity",
  WriteEntity = "writeEntity",
  ManageDashboards = "manageDashboards",
  AccessDashboard = "accessDashboard",
  AccessPlugin = "accessPlugin"
}