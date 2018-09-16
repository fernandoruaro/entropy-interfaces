import { Deletable } from './Deletable';
export declare class Role extends Deletable {
    id?: string;
    workspaceId: string;
    actions: Array<RoleAction>;
}
export declare class RoleAction {
    type: RoleActionType;
}
declare enum RoleActionType {
    ManageWorkspaceMembers = "manageWorkspaceMembers"
}
export {};
