import { Dashboard } from "../classes/Dashboard";
import { Operation } from "../classes/Operation";
import { DataTablesOptions, DataTablesResponse } from "../classes/DataTablesOptions";
export declare abstract class IDashboardDataService {
    abstract load(query: DashboardDataLoadRequest): Promise<DataTablesResponse> | Promise<Array<any>>;
}
export interface DashboardDataLoadRequest {
    dashboard: Dashboard;
    widgetId: string;
    dataTables?: DataTablesOptions;
    filter: Operation;
}
