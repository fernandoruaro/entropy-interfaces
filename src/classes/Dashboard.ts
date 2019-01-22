import { Deletable } from './Deletable';
import { Operation } from './Operation';
import { DataTablesOptions } from './DataTablesOptions';

export interface Dashboard extends Deletable {
  id?: string
  workspaceId?: string
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

export interface DashboardFilter {
  dataTables?: DataTablesOptions,
  filter: Operation
}