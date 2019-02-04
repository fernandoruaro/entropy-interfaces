import { Deletable } from './Deletable';
import { Operation } from './Operation';
import { DataTablesOptions } from './DataTablesOptions';
export interface Dashboard extends Deletable {
    id?: string;
    workspaceId?: string;
    properties: Array<DashboardProperty>;
    widgets: Array<DashboardWidget>;
    title: string;
    entityId: string;
}
export declare enum DashboardPropertyType {
    FUNCTION = "function",
    PROPERTY = "property"
}
export interface DashboardProperty {
    id?: string;
    type: DashboardPropertyType;
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
export declare enum DashboardWidgetType {
    BAR = "bar",
    LINE = "line",
    TABLE = "table",
    PIVOT_TABLE = "pivot_table"
}
export declare enum DashboardWidgetOrder {
    ASC = "asc",
    DESC = "desc"
}
export interface DashboardWidget {
    id?: string;
    title: string;
    type: DashboardWidgetType;
    maxItems: number;
    orderBy?: string;
    order: DashboardWidgetOrder;
    groupByProperties: Array<string>;
    aggregations: Array<DashboardWidgetAggregation>;
}
export interface DashboardFilter {
    dataTables?: DataTablesOptions;
    filter: Operation;
}
