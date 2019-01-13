import { Deletable } from './Deletable';

export interface Dashboard extends Deletable {
  id?: string
  workspaceId: string
  properties: Array<DashboardProperty>
  widgets: Array<DashboardWidget>
  title: string
  entityId: string
}

export interface DashboardProperty {
  id?: string
  type: string
  displayName: string
  function?: string
  propertyId?: string
  filter?: boolean
  column?: boolean
}

export interface DashboardWidgetAggregation {
  id?: string
  displayName: string
  function: string
}

export interface DashboardWidget {
  id?: string
  title: string
  type: string
  maxItems: number
  order: string
  groupByProperties: Array<string>
  aggregations: Array<DashboardWidgetAggregation>
}

export interface FinalOperation<T> {
  [propertyId: string] : T
}

export interface Operation {
  AND?: Array<Operation>
  OR?: Array<Operation>
  NOT?: Operation
  IN?: FinalOperation<Array<string>>
  LT?: FinalOperation<number>
  LTE?: FinalOperation<number>
  GT?: FinalOperation<number>
  GTE?: FinalOperation<number>
  EQ?: FinalOperation<Array<string>>
}

export interface DashboardFilter {
  dataTables?: DataTablesOptions,
  filter: Operation
}

export interface DataTablesColumnOptions {
  data: string //Column id
}


export interface DataTablesOrderOptions {
  column: number //Column index
  dir: string //asc or desc 
}

export interface DataTablesSearchOptions {
  value: string
}

export interface DataTablesOptions {
  columns: Array<DataTablesColumnOptions>
  draw: number
  length: number
  order: Array<DataTablesOrderOptions>
  search: DataTablesSearchOptions
  start: number
}

export interface DataTablesResponse {
  draw: number
  data: Array<any>
  recordsTotal: number
  recordsFiltered: number
}