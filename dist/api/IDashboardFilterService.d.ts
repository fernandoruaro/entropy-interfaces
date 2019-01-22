import { Dashboard } from "../classes/Dashboard";
export declare abstract class IDashboardFilterService {
    abstract load(query: DashboardFilterLoadRequest): Promise<Array<string>>;
}
export interface DashboardFilterLoadRequest {
    dashboard: Dashboard;
    propertyId: string;
}
