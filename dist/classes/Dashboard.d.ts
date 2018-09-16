import { Deletable } from './Deletable';
export declare class Dashboard extends Deletable {
    id?: string;
    workspaceId: string;
    properties: Array<DashboardProperty>;
    widgets: Array<DashboardWidget>;
}
export declare class DashboardProperty {
    id?: string;
    type: string;
    displayName: string;
    function?: string;
    propertyId?: string;
}
export declare class DashboardWidgetAggregation {
    id?: string;
    displayName: string;
    function: string;
}
export declare class DashboardWidget {
    id?: string;
    title: string;
    type: string;
    maxItems: number;
    order: string;
    groupByProperties: Array<string>;
    aggregations: Array<DashboardWidgetAggregation>;
}
