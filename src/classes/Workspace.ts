import { Deletable } from './Deletable';

export class Workspace extends Deletable {
  id?: string
  name: string
  subdomain: string
}