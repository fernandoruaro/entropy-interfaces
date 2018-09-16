import { Deletable } from './Deletable';

export class EntityData extends Deletable {
  id?: string
  entityId: string
  [propertyId: string]: any;
}
