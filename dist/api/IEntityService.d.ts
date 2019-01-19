import { Entity } from "../classes/Entity";
export declare abstract class IEntityService {
    abstract list(): Promise<Array<Entity>>;
    abstract get(entityId: any): Promise<Entity>;
    abstract createOrUpdate(entity: Entity): Promise<Entity>;
    abstract delete(id: string): Promise<void>;
}
