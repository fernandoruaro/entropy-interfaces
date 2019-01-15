import { Subscribable } from "rxjs";
import { EntityDataFilter, EntityData } from "../classes/EntityData";

export abstract class IEntityDataService {
    abstract report(entityId: string, filter: EntityDataFilter): Subscribable<Array<EntityData>>;
}