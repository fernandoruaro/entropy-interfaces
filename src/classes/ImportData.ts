import { Deletable } from './Deletable';

export enum ImportDataStatus {
    VALIDATING = "VALIDATING",
    IMPORTING = "IMPORTING",
    FAILED = "FAILED",
    READY = "READY"
}

export interface ImportData extends Deletable {
    id?: string
    entityId: string
    workspaceId?: string
    path?: string
    status?: ImportDataStatus
    failure?: string
    batchSize?: number
    currentRow?: number
}