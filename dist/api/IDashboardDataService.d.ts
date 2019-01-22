import { Dashboard } from "../classes/Dashboard";
import { Operation } from "../classes/Operation";
import { DataTablesOptions } from "../classes/DataTablesOptions";
export declare abstract class IDashboardDataService {
    abstract load(query: DashboardDataLoadRequest): any;
}
export interface DashboardDataLoadRequest {
    dashboard: Dashboard;
    widgetId: string;
    dataTables?: DataTablesOptions;
    filter: Operation;
}
