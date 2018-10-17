import { Deletable } from './Deletable';
export interface Workspace extends Deletable {
    id?: string;
    name: string;
    subdomain: string;
}
