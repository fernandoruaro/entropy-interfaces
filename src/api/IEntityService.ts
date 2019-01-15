import { Observable } from "rxjs";
import { Entity } from "../classes/Entity";

export abstract class IEntityService {
    abstract list(): Observable<Array<Entity>>;
    abstract get(entityId): Observable<Entity>;
}