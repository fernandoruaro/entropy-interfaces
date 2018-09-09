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
var Trail = /** @class */ (function () {
    function Trail() {
    }
    return Trail;
}());
exports.Trail = Trail;
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
var EntityProperty = /** @class */ (function () {
    function EntityProperty() {
    }
    return EntityProperty;
}());
exports.EntityProperty = EntityProperty;
var Deletable = /** @class */ (function () {
    function Deletable() {
    }
    return Deletable;
}());
exports.Deletable = Deletable;
var Entity = /** @class */ (function (_super) {
    __extends(Entity, _super);
    function Entity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Entity;
}(Deletable));
exports.Entity = Entity;
var DashboardProperty = /** @class */ (function () {
    function DashboardProperty() {
    }
    return DashboardProperty;
}());
exports.DashboardProperty = DashboardProperty;
var DashboardWidgetAggregation = /** @class */ (function () {
    function DashboardWidgetAggregation() {
    }
    return DashboardWidgetAggregation;
}());
exports.DashboardWidgetAggregation = DashboardWidgetAggregation;
var DashboardWidget = /** @class */ (function () {
    function DashboardWidget() {
    }
    return DashboardWidget;
}());
exports.DashboardWidget = DashboardWidget;
var Dashboard = /** @class */ (function (_super) {
    __extends(Dashboard, _super);
    function Dashboard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dashboard;
}(Deletable));
exports.Dashboard = Dashboard;
var EntityData = /** @class */ (function (_super) {
    __extends(EntityData, _super);
    function EntityData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EntityData;
}(Deletable));
exports.EntityData = EntityData;
var WorkspaceMember = /** @class */ (function (_super) {
    __extends(WorkspaceMember, _super);
    function WorkspaceMember() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return WorkspaceMember;
}(Deletable));
exports.WorkspaceMember = WorkspaceMember;
