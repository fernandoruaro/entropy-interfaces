"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RoleActionResource;
(function (RoleActionResource) {
    RoleActionResource["Wildcard"] = "*";
})(RoleActionResource = exports.RoleActionResource || (exports.RoleActionResource = {}));
var RoleActionType;
(function (RoleActionType) {
    RoleActionType["Admin"] = "admin";
    RoleActionType["ManageWorkspace"] = "manageWorkspace";
    RoleActionType["ManageWorkspaceMembers"] = "manageWorkspaceMembers";
    RoleActionType["ManageEntities"] = "manageEntities";
    RoleActionType["ReadEntityData"] = "readEntityData";
    RoleActionType["WriteEntityData"] = "writeEntityData";
    RoleActionType["ManageDashboards"] = "manageDashboards";
    RoleActionType["AccessDashboard"] = "accessDashboard";
    RoleActionType["AccessPlugin"] = "accessPlugin";
})(RoleActionType = exports.RoleActionType || (exports.RoleActionType = {}));
