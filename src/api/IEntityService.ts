import { Subscribable } from "rxjs";
import { Entity } from "../classes/Entity";

export abstract class IEntityService {
    abstract list(): Subscribable<Array<Entity>>;
    abstract get(entityId): Subscribable<Entity>;
}