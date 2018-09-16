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
var Role = /** @class */ (function (_super) {
    __extends(Role, _super);
    function Role() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Role;
}(Deletable_1.Deletable));
exports.Role = Role;
var RoleAction = /** @class */ (function () {
    function RoleAction() {
    }
    return RoleAction;
}());
exports.RoleAction = RoleAction;
var RoleActionType;
(function (RoleActionType) {
    RoleActionType["ManageWorkspaceMembers"] = "manageWorkspaceMembers";
})(RoleActionType = exports.RoleActionType || (exports.RoleActionType = {}));
