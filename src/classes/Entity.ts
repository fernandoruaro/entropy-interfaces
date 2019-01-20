import { Deletable } from './Deletable';

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

export interface Entity extends Deletable {
  id?: string
  integrationId?: string
  displayName: string
  workspaceId?: string
  properties: Array<EntityProperty>
}

export interface EntityPropertyDisplay {
  tableColumn: boolean
  width: number //1-12 - 4=33,33%, 6=50%, 8=66,66
}

export interface EntityProperty {
  id?: string
  integrationId?: string
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
  display?: EntityPropertyDisplay
}



