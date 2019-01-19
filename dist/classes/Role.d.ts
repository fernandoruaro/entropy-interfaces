import { Deletable } from './Deletable';
export interface Role extends Deletable {
    id?: string;
    workspaceId: string;
    name: string;
    actions: Array<RoleAction>;
}
export interface RoleAction {
    type: RoleActionType;
    resourceId?: string;
}
export declare enum RoleActionType {
    ManageWorkspace = "manageWorkspace",
    ManageWorkspaceMembers = "manageWorkspaceMembers",
    ManageEntities = "manageEntities",
    ReadEntityData = "readEntityData",
    WriteEntityData = "writeEntityData",
    ManageDashboards = "manageDashboards",
    AccessDashboard = "accessDashboard",
    AccessPlugin = "accessPlugin"
}
