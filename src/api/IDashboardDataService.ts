import { Dashboard } from "../classes/Dashboard";
import { Operation } from "../classes/Operation";
import { DataTablesOptions } from "../classes/DataTablesOptions";

export abstract class IDashboardDataService {
    abstract load(query: DashboardDataLoadRequest)
}

export interface DashboardDataLoadRequest {
    dashboard: Dashboard,
    widgetId: string,
    dataTables?: DataTablesOptions,
    filter: Operation
}