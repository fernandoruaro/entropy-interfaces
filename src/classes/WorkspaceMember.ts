import { Deletable } from './Deletable';

export interface WorkspaceMember extends Deletable {
  userEmail: string
  workspaceId: string
  roles: Array<string>
}