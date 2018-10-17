import { Deletable } from './Deletable';
export interface EntityData extends Deletable {
    id?: string;
    entityId: string;
    [propertyId: string]: any;
}
