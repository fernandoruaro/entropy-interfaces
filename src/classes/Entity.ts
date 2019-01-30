import { Deletable } from './Deletable';

export enum DateFormat {
  Date = "date",
  DateTime = "dateTime"
}

export enum NumberFormat {
  Currency = "currency",
  Integer = "integer",
  Decimal = "decimal"
}

export enum MultipleChoicesFrom {
  Options = "options",
  Entity = "entity"
}

export enum TextMask {
  Phone = "phone",
  CPF = "cpf",
  CNPJ = "cnpj",
  Free = "free"
}

export enum EntityPropertyType {
  Text = "text",
  Number = "number",
  Choices = "choices",
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
  choicesFrom?: MultipleChoicesFrom
  choicesOptions?: Array<string>
  choicesEntityId?: string
  choicesEntityPropertyId?: string
  textMask?: TextMask
  display?: EntityPropertyDisplay
}



