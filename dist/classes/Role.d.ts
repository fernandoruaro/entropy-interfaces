import { Deletable } from './Deletable';
export interface Role extends Deletable {
    id?: string;
    workspaceId: string;
    name: string;
    actions: Array<RoleAction>;
}
export interface RoleAction {
    type: RoleActionType;
    resourceId?: string | RoleActionResource;
}
export declare enum RoleActionResource {
    Wildcard = "*"
}
export declare enum RoleActionType {
    Admin = "admin",
    ManageWorkspace = "manageWorkspace",
    ManageWorkspaceMembers = "manageWorkspaceMembers",
    ManageEntities = "manageEntities",
    ReadEntityData = "readEntityData",
    WriteEntityData = "writeEntityData",
    ManageDashboards = "manageDashboards",
    AccessDashboard = "accessDashboard",
    AccessPlugin = "accessPlugin"
}
