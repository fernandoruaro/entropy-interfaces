"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Deletable_1 = require("./Deletable");
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
    TextMask["Multiline"] = "multiline";
})(TextMask || (TextMask = {}));
var EntityPropertyType;
(function (EntityPropertyType) {
    EntityPropertyType["Text"] = "text";
    EntityPropertyType["Number"] = "number";
    EntityPropertyType["MultipleChoices"] = "multipleChoices";
    EntityPropertyType["DateTime"] = "dateTime";
})(EntityPropertyType || (EntityPropertyType = {}));
var Entity = /** @class */ (function (_super) {
    __extends(Entity, _super);
    function Entity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Entity;
}(Deletable_1.Deletable));
exports.Entity = Entity;
var EntityPropertyDisplay = /** @class */ (function () {
    function EntityPropertyDisplay() {
    }
    return EntityPropertyDisplay;
}());
exports.EntityPropertyDisplay = EntityPropertyDisplay;
var EntityProperty = /** @class */ (function () {
    function EntityProperty() {
    }
    return EntityProperty;
}());
exports.EntityProperty = EntityProperty;
