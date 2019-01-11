import { Deletable } from './Deletable';
export interface Dashboard extends Deletable {
    id?: string;
    workspaceId: string;
    properties: Array<DashboardProperty>;
    widgets: Array<DashboardWidget>;
    title: string;
    entityId: string;
}
export interface DashboardProperty {
    id?: string;
    type: string;
    displayName: string;
    function?: string;
    propertyId?: string;
    filter?: boolean;
    column?: boolean;
}
export interface DashboardWidgetAggregation {
    id?: string;
    displayName: string;
    function: string;
}
export interface DashboardWidget {
    id?: string;
    title: string;
    type: string;
    maxItems: number;
    order: string;
    groupByProperties: Array<string>;
    aggregations: Array<DashboardWidgetAggregation>;
}
export interface DashboardFilter {
    dataTables?: DataTablesOptions;
    filter: DashboardFilterFilter;
}
export interface DashboardFilterFilter {
    [propertyId: string]: Array<string>;
}
export interface DataTablesColumnOptions {
    data: string;
}
export interface DataTablesOrderOptions {
    column: number;
    dir: string;
}
export interface DataTablesSearchOptions {
    value: string;
}
export interface DataTablesOptions {
    columns: Array<DataTablesColumnOptions>;
    draw: number;
    length: number;
    order: Array<DataTablesOrderOptions>;
    search: DataTablesSearchOptions;
    start: number;
}
export interface DataTablesResponse {
    draw: number;
    data: Array<any>;
    recordsTotal: number;
    recordsFiltered: number;
}
