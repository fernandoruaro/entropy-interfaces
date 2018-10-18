import { Deletable } from './Deletable';
import { User } from './User';

export interface WorkspaceMember extends Deletable {
  userEmail: string
  workspaceId: string
  roles: Array<string>
  user?: User
}