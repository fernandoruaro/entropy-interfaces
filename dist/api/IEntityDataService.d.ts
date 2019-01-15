import { Subscribable } from "rxjs";
import { EntityDataFilter, EntityData } from "../classes/EntityData";
export declare abstract class IEntityDataService {
    abstract report(entityId: string, filter: EntityDataFilter): Subscribable<Array<EntityData>>;
}
