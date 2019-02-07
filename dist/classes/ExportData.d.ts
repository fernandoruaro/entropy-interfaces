import { Deletable } from './Deletable';
export declare enum ExportDataStatus {
    INIT = "INIT",
    PROCESSING = "PROCESSING",
    FAILED = "FAILED",
    READY = "READY"
}
export interface ExportData extends Deletable {
    id?: string;
    entityId: string;
    workspaceId?: string;
    path?: string;
    url?: string;
    status?: ExportDataStatus;
    failure?: string;
    batchSize?: number;
    currentRow?: number;
}
