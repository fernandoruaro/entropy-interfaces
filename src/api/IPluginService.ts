import { Plugin } from "../classes/Plugin";

export abstract class IPluginService {
    abstract list(): Promise<Array<Plugin>>;
    abstract createOrUpdate(plugin: Plugin): Promise<Plugin>;
    abstract delete(id: string): Promise<void>;
}