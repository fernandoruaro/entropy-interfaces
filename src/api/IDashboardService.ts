import { Dashboard } from "../classes/Dashboard";

export abstract class IDashboardService {
    abstract list(): Promise<Array<Dashboard>>;
    abstract get(id: string): Promise<Dashboard>;
    abstract createOrUpdate(dashboard: Dashboard): Promise<Dashboard>;
    abstract delete(id: string): Promise<void>;
}