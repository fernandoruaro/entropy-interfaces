import { Workspace } from "../classes/Workspace";

export abstract class IWorkspaceService {
    abstract get(id?: string): Promise<Workspace>;
    abstract getBySubdomain(id: string): Promise<Workspace>;
    abstract createOrUpdate(workspace: Workspace): Promise<Workspace>;
}