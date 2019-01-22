import { Dashboard } from "../classes/Dashboard";

export abstract class IDashboardFilterService {
    abstract load(query: DashboardFilterLoadRequest): Promise<Array<string>>;
}

export interface DashboardFilterLoadRequest {
    dashboard: Dashboard
    propertyId: string
}