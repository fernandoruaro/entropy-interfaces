import { Deletable } from './Deletable';
import { Operation } from './Operation';
import { DataTablesOptions } from './DataTablesOptions';

export interface EntityData extends Deletable {
  id?: string
  entityId: string
  [propertyId: string]: any;
}

export interface EntityDataFilter {
  dataTables?: DataTablesOptions,
  filter: Operation
}