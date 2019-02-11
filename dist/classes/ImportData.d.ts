import { Deletable } from './Deletable';
export declare enum ImportDataStatus {
    PENDING_UPLOAD = "PENDING_UPLOAD",
    VALIDATING = "VALIDATING",
    IMPORTING = "IMPORTING",
    FAILED = "FAILED",
    READY = "READY"
}
export interface ImportData extends Deletable {
    id?: string;
    entityId: string;
    workspaceId?: string;
    path?: string;
    status?: ImportDataStatus;
    failure?: string;
    batchSize?: number;
    currentRow?: number;
}
