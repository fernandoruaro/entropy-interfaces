export interface DataTablesOptions {
    columns: Array<DataTablesColumnOptions>;
    draw: number;
    length: number;
    order: Array<DataTablesOrderOptions>;
    search: DataTablesSearchOptions;
    start: number;
}
export interface DataTablesSearchOptions {
    value: string;
}
export interface DataTablesResponse {
    draw: number;
    data: Array<any>;
    recordsTotal: number;
    recordsFiltered: number;
}
export interface DataTablesColumnOptions {
    data: string;
}
export interface DataTablesOrderOptions {
    column: number;
    dir: string;
}
