import { Role } from "../classes/Role";
export declare abstract class IRoleService {
    abstract list(): Promise<Array<Role>>;
    abstract createOrUpdate(role: Role): Promise<Role>;
    abstract delete(id: string): Promise<void>;
}
