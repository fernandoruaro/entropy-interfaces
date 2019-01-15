export interface Operation {
    AND?: Array<Operation>
    OR?: Array<Operation>
    NOT?: Operation
    IN?: FinalOperation<Array<string>>
    LT?: FinalOperation<number>
    LTE?: FinalOperation<number>
    GT?: FinalOperation<number>
    GTE?: FinalOperation<number>
    LIKE?: FinalOperation<String>
    EQ?: FinalOperation<string>
}

export interface FinalOperation<T> {
    [propertyId: string]: T
}