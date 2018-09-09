export declare class Trail {
    workspaceId: string;
    at: number;
    name: string;
    email: string;
}
declare enum DateFormat {
    Date = "date",
    DateTime = "dateTime"
}
declare enum NumberFormat {
    Currency = "currency",
    Integer = "integer",
    Decimal = "decimal"
}
declare enum MultipleChoicesFrom {
    Options = "options",
    Entity = "entity"
}
declare enum TextMask {
    Phone = "phone",
    CPF = "cpf",
    CNPJ = "cnpj",
    Free = "free"
}
declare enum EntityPropertyType {
    Text = "text",
    Number = "number",
    MultipleChoices = "multipleChoices",
    DateTime = "dateTime"
}
export declare class EntityProperty {
    id?: string;
    displayName: string;
    required: boolean;
    type: EntityPropertyType;
    dateFormat?: DateFormat;
    numberFormat?: NumberFormat;
    multipleChoicesFrom?: MultipleChoicesFrom;
    multipleChoicesOptions?: Array<string>;
    multipleChoicesEntityId?: string;
    multipleChoicesEntityPropertyId?: string;
    textMask?: TextMask;
}
export declare abstract class Deletable {
    deleted?: boolean;
    trail?: Trail;
}
export declare class Entity extends Deletable {
    id?: string;
    displayName: string;
    workspaceId: string;
    properties: Array<EntityProperty>;
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
export declare class Dashboard extends Deletable {
    id?: string;
    workspaceId: string;
    properties: Array<DashboardProperty>;
    widgets: Array<DashboardWidget>;
}
export declare class EntityData extends Deletable {
    id?: string;
    entityId: string;
    [propertyId: string]: any;
}
export declare class WorkspaceMember extends Deletable {
    userEmail: string;
    workspaceId: string;
}
export {};
