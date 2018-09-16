import { Deletable } from './Deletable';
export declare class EntityData extends Deletable {
    id?: string;
    entityId: string;
    [propertyId: string]: any;
}
