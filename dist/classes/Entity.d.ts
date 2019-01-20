import { Deletable } from './Deletable';
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
export interface Entity extends Deletable {
    id?: string;
    integrationId?: string;
    displayName: string;
    workspaceId?: string;
    properties: Array<EntityProperty>;
}
export interface EntityPropertyDisplay {
    tableColumn: boolean;
    width: number;
}
export interface EntityProperty {
    id?: string;
    integrationId?: string;
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
    display?: EntityPropertyDisplay;
}
export {};
