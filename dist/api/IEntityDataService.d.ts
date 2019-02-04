import { EntityDataFilter, EntityData } from "../classes/EntityData";
export declare abstract class IEntityDataService {
    abstract report(entityId: string, filter: EntityDataFilter): Promise<Array<EntityData>>;
}
