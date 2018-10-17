"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DateFormat;
(function (DateFormat) {
    DateFormat["Date"] = "date";
    DateFormat["DateTime"] = "dateTime";
})(DateFormat || (DateFormat = {}));
var NumberFormat;
(function (NumberFormat) {
    NumberFormat["Currency"] = "currency";
    NumberFormat["Integer"] = "integer";
    NumberFormat["Decimal"] = "decimal";
})(NumberFormat || (NumberFormat = {}));
var MultipleChoicesFrom;
(function (MultipleChoicesFrom) {
    MultipleChoicesFrom["Options"] = "options";
    MultipleChoicesFrom["Entity"] = "entity";
})(MultipleChoicesFrom || (MultipleChoicesFrom = {}));
var TextMask;
(function (TextMask) {
    TextMask["Phone"] = "phone";
    TextMask["CPF"] = "cpf";
    TextMask["CNPJ"] = "cnpj";
    TextMask["Free"] = "free";
})(TextMask || (TextMask = {}));
var EntityPropertyType;
(function (EntityPropertyType) {
    EntityPropertyType["Text"] = "text";
    EntityPropertyType["Number"] = "number";
    EntityPropertyType["MultipleChoices"] = "multipleChoices";
    EntityPropertyType["DateTime"] = "dateTime";
})(EntityPropertyType || (EntityPropertyType = {}));
