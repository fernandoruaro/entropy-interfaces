import { Observable } from "rxjs";
import { Entity } from "../classes/Entity";
export declare abstract class IEntityService {
    abstract list(): Observable<Array<Entity>>;
    abstract get(entityId: any): Observable<Entity>;
}
