export interface UseClass {
    description: string
    requirements: RequiredParams[]
}

export type RequiredParams = 'LOCATION' | 'GROSS_EXTERN_AREA' | 'BEDROOMS'