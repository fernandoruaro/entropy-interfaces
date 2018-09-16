import { Deletable } from './Deletable';

export class WorkspaceMember extends Deletable {
  userEmail: string
  workspaceId: string
  roles: Array<string>
}