import { Subscribable } from "rxjs";
import { EntityDataFilter, EntityData } from "../classes/EntityData";
export declare abstract class IEntityDataService {
    abstract report(filter: EntityDataFilter): Subscribable<Array<EntityData>>;
}
