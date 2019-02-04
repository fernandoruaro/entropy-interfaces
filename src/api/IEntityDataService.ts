import { EntityDataFilter, EntityData } from "../classes/EntityData";

export abstract class IEntityDataService {
    abstract report(entityId: string, filter: EntityDataFilter): Promise<Array<EntityData>>;
}