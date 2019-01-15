import { Subscribable } from "rxjs";
import { Entity } from "../classes/Entity";
export declare abstract class IEntityService {
    abstract list(): Subscribable<Array<Entity>>;
    abstract get(entityId: any): Subscribable<Entity>;
}
