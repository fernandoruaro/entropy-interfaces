import { Deletable } from './Deletable';
export interface WorkspaceLayout {
    mainColor: string;
}
export interface Workspace extends Deletable {
    id?: string;
    name: string;
    subdomain: string;
    layout: WorkspaceLayout;
}
