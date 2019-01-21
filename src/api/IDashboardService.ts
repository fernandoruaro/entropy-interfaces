import { Dashboard } from "../classes/Dashboard";

export abstract class IDashboardService {
    abstract list(): Promise<Array<Dashboard>>;
    abstract get(entityId): Promise<Dashboard>;
    abstract createOrUpdate(entity: Dashboard): Promise<Dashboard>;
    abstract delete(id: string): Promise<void>;
}