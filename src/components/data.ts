import { UseClass } from '../types'

export const useClassList : UseClass[] = [
    {
        description: "A1 - Food retail",
        requirements: [
            "GROSS_EXTERN_AREA",
            "LOCATION"
        ]
    },
    {
        description: "A1 - Non-food retail",
        requirements: [
            "GROSS_EXTERN_AREA",
            "LOCATION"
        ]
    },
    {
        description: "A2-A5 - Financial / professional services; cafes & restaurants; drinking establishments; take-aways",
        requirements: [
            "GROSS_EXTERN_AREA",
            "LOCATION"
        ]
    },
    {
        description: "B1 - Business offices",
        requirements: [
            "GROSS_EXTERN_AREA",
            "LOCATION"
        ]
    },
    {
        description: "B1 - Light industry and research and development",
        requirements: [
            "GROSS_EXTERN_AREA",
        ]
    },
    {
        description: "B2-B8 - General industrial, storage or distribution",
        requirements: [
            "GROSS_EXTERN_AREA",
        ]
    },
    {
        description: "C1 - Hotels (bars, restaurants, gyms etc. open to the public should be considered individually under relevant standards)",
        requirements: [
            "BEDROOMS"
        ]
    },
    {
        description: "C2 - Hospitals",
        requirements: [
            "STAFF"
        ]
    },
    {
        description: "C2 - Care homes / secure accommodation",
        requirements: [
            "STAFF",
            "BEDROOMS"
        ]
    },
    {
        description: "C3-C4 - Dwellings (all)",
        requirements: [
            "STUDIOS",
            "TWO_PERSON_ONE_BEDROOM",
            "TWO_BEDROOM_PLUS",
            "DWELLINGS"
        ]
    },
    {
        description: "D1 - Nurseries",
        requirements: [
            "STAFF",
            "STUDENTS"
        ]
    },
    {
        description: "D1 - Primary schools / secondary schools / sixth form colleges",
        requirements: [
            "STAFF",
            "STUDENTS"
        ]
    },
    {
        description: "D1 - Universities / colleges",
        requirements: [
            "STAFF",
            "STUDENTS"
        ]
    },
    {
        description: "D1 - Health centre, including dentists",
        requirements: [
            "STAFF"
        ]
    },
    {
        description: "D1 - Other (e.g. library, church)",
        requirements: [
            "STAFF",
            "GROSS_EXTERN_AREA"
        ]
    },
    {
        description: "D2 - Other (e.g. cinema, bingo)",
        requirements: [
            "STAFF",
            "SEATS"
        ]
    },
    {
        description: "D2 - Sports (e.g. sports hall, swimming, gymnasium)",
        requirements: [
            "STAFF",
            "GROSS_EXTERN_AREA"
        ]
    },
    {
        description: "Student Accommodation",
        requirements: [
            "BEDROOMS"
        ]
    },
    {
        description: "Specialist older persons housing",
        requirements: [
            "BEDROOMS"
        ]
    },
]

export const reqDescriptions = {
    BEDROOMS : "Number of bedrooms",
    LOCATION : "Is it in central London? (0 for no, 1 for yes)",
    GROSS_EXTERN_AREA : "Gross External Area",
    STAFF: "Number of full-time staff",
    STUDIOS: "Number of studio / 1 person 1 bedroom dwellings",
    TWO_PERSON_ONE_BEDROOM: "Number of 2 person 1 bedroom dwellings",
    TWO_BEDROOM_PLUS: "Number dwellings with two or more bedrooms",
    DWELLINGS: "Total number of dwellings",
    STUDENTS: "Number of students",
    SEATS: "Number of seats"
}