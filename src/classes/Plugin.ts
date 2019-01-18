import { Deletable } from "./Deletable";

export interface Plugin extends Deletable {
    id?: string
    name: string
    icon: string
    moduleUrl: string
    componentAlias: string
}