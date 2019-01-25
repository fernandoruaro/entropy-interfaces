import { Deletable } from './Deletable';
export interface WorkspaceLayout {
    mainColor?: string;
    lightLogoUrl?: string;
    darkLogoUrl?: string;
    menus?: Array<RootMenuItem>;
}
export interface Workspace extends Deletable {
    id?: string;
    name: string;
    subdomain: string;
    layout?: WorkspaceLayout;
}
export declare enum MenuItemType {
    MENU = "menu",
    PLUGIN = "plugin",
    DASHBOARD = "dashboard",
    ENTITY = "entity",
    USERS = "users"
}
export interface MenuItem {
    item?: Array<MenuItem>;
    type?: MenuItemType;
    resourceId?: string;
    name: string;
}
export interface RootMenuItem extends MenuItem {
    icon: string;
}
