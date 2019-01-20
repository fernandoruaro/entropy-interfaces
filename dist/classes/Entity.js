"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DateFormat;
(function (DateFormat) {
    DateFormat["Date"] = "date";
    DateFormat["DateTime"] = "dateTime";
})(DateFormat = exports.DateFormat || (exports.DateFormat = {}));
var NumberFormat;
(function (NumberFormat) {
    NumberFormat["Currency"] = "currency";
    NumberFormat["Integer"] = "integer";
    NumberFormat["Decimal"] = "decimal";
})(NumberFormat = exports.NumberFormat || (exports.NumberFormat = {}));
var MultipleChoicesFrom;
(function (MultipleChoicesFrom) {
    MultipleChoicesFrom["Options"] = "options";
    MultipleChoicesFrom["Entity"] = "entity";
})(MultipleChoicesFrom = exports.MultipleChoicesFrom || (exports.MultipleChoicesFrom = {}));
var TextMask;
(function (TextMask) {
    TextMask["Phone"] = "phone";
    TextMask["CPF"] = "cpf";
    TextMask["CNPJ"] = "cnpj";
    TextMask["Free"] = "free";
})(TextMask = exports.TextMask || (exports.TextMask = {}));
var EntityPropertyType;
(function (EntityPropertyType) {
    EntityPropertyType["Text"] = "text";
    EntityPropertyType["Number"] = "number";
    EntityPropertyType["MultipleChoices"] = "multipleChoices";
    EntityPropertyType["DateTime"] = "dateTime";
})(EntityPropertyType = exports.EntityPropertyType || (exports.EntityPropertyType = {}));
