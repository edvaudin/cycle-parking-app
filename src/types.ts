export interface UseClass {
    description: string
    requirements: RequiredParams[]
}

export type RequiredParams = 'LOCATION' | 'GROSS_EXTERN_AREA' | 'BEDROOMS' | 'STAFF' | 'STUDIOS' | 'TWO_PERSON_ONE_BEDROOM' | 'TWO_BEDROOM_PLUS' | 'DWELLINGS' | 'STUDENTS' | 'SEATS'