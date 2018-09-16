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
var Dashboard = /** @class */ (function (_super) {
    __extends(Dashboard, _super);
    function Dashboard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dashboard;
}(Deletable_1.Deletable));
exports.Dashboard = Dashboard;
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
