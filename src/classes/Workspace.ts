import { Deletable } from './Deletable';

export interface WorkspaceLayout {
  mainColor?: string
  lightLogoUrl?: string
  darkLogoUrl?: string
  menus?: Array<MenuItem>
}

export interface Workspace extends Deletable {
  id?: string
  name: string
  subdomain: string
  layout?: WorkspaceLayout
}


export enum MenuItemType {
  MENU = "menu",
  PLUGIN = "plugin",
  DASHBOARD = "dashboard",
  ENTITY = "entity",
  USERS = "users"
}

export interface MenuItem {
  items?: Array<MenuItem>
  type: MenuItemType
  resourceId?: string
  name: string
  icon: string
  id: string
}