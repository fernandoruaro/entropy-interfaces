import { Entity } from "../classes/Entity";

export abstract class IEntityService {
    abstract list(): Promise<Array<Entity>>;
    abstract get(entityId): Promise<Entity>;
    abstract createOrUpdate(entity: Entity): Promise<Entity>;
    abstract delete(id: string): Promise<void>;
}