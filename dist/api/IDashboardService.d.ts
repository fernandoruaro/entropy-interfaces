import { Dashboard } from "../classes/Dashboard";
export declare abstract class IDashboardService {
    abstract list(): Promise<Array<Dashboard>>;
    abstract get(entityId: any): Promise<Dashboard>;
    abstract createOrUpdate(entity: Dashboard): Promise<Dashboard>;
    abstract delete(id: string): Promise<void>;
}
