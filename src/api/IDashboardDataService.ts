import { Dashboard } from "../classes/Dashboard";
import { Operation } from "../classes/Operation";
import { DataTablesOptions } from "../classes/DataTablesOptions";

export abstract class IDashboardDataService {
    abstract load(query: DashboardDataLoadRequest): any //Promise<DataTablesResponse> | Promise<Array<any>>
}

export interface DashboardDataLoadRequest {
    dashboard: Dashboard,
    widgetId: string,
    dataTables?: DataTablesOptions,
    filter: Operation
}