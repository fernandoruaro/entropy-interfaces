import { Deletable } from './Deletable';
export declare class WorkspaceMember extends Deletable {
    userEmail: string;
    workspaceId: string;
    roles: Array<string>;
}
