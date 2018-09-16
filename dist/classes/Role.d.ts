import { Deletable } from './Deletable';
export declare class Role extends Deletable {
    id?: string;
    workspaceId: string;
    name: string;
    actions: Array<RoleAction>;
}
export declare class RoleAction {
    type: RoleActionType;
}
export declare enum RoleActionType {
    ManageWorkspaceMembers = "manageWorkspaceMembers"
}
