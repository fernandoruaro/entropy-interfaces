import { Deletable } from './Deletable';
export interface WorkspaceLayout {
    mainColor?: string;
    lightLogoUrl?: string;
    darkLogoUrl?: string;
}
export interface Workspace extends Deletable {
    id?: string;
    name: string;
    subdomain: string;
    layout?: WorkspaceLayout;
}
