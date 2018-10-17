import { RoleAction } from "./Role";
export interface User {
    email: string;
    familyName: string;
    givenName: string;
    lastAuthorization: Date;
    name: string;
    picture: string;
    sub: string;
}
export interface Me extends User {
    allowedActions: Array<RoleAction>;
}
