export class Trail {
  workspaceId: string
  at: number
  name: string
  email: string
}

enum DateFormat {
  Date = "date",
  DateTime = "dateTime"
}

enum NumberFormat {
  Currency = "currency",
  Integer = "integer",
  Decimal = "decimal"
}

enum MultipleChoicesFrom {
  Options = "options",
  Entity = "entity"
}

enum TextMask {
  Phone = "phone",
  CPF = "cpf",
  CNPJ = "cnpj",
  Free = "free"
}

enum EntityPropertyType {
  Text = "text",
  Number = "number",
  MultipleChoices = "multipleChoices",
  DateTime = "dateTime",
}

export class EntityProperty {
  id?: string
  displayName: string
  required: boolean
  type: EntityPropertyType
  dateFormat?: DateFormat
  numberFormat?: NumberFormat
  multipleChoicesFrom?: MultipleChoicesFrom
  multipleChoicesOptions?: Array<string>
  multipleChoicesEntityId?: string
  multipleChoicesEntityPropertyId?: string
  textMask?: TextMask
}

export abstract class Deletable {
  deleted?: boolean
  trail?: Trail
}

export class Entity extends Deletable {
  id?: string
  displayName: string
  workspaceId: string
  properties: Array<EntityProperty>
}

export class DashboardProperty {
  id?: string
  type: string
  displayName: string
  function?: string
  propertyId?: string
}

export class DashboardWidgetAggregation {
  id?: string
  displayName: string
  function: string
}

export class DashboardWidget {
  id?: string
  title: string
  type: string
  maxItems: number
  order: string
  groupByProperties: Array<string>
  aggregations: Array<DashboardWidgetAggregation>
}

export class Dashboard extends Deletable {
  id?: string
  workspaceId: string
  properties: Array<DashboardProperty>
  widgets: Array<DashboardWidget>
}

export class EntityData extends Deletable {
  id?: string
  entityId: string
  [propertyId: string]: any;
}

export class WorkspaceMember extends Deletable {
  userEmail: string
  workspaceId: string
}