import { UseClass } from '../types'

export const useClassList : UseClass[] = [
    {
        description: "Food retail",
        requirements: [
            "GROSS_EXTERN_AREA",
            "LOCATION"
        ]
    },
    {
        description: "Hotel",
        requirements: [
            "BEDROOMS"
        ]
    },
    {
        description: "Student Accommodation",
        requirements: [
            "BEDROOMS"
        ]
    },
    {
        description: "Light industry and research and development",
        requirements: [
            "GROSS_EXTERN_AREA"
        ]
    }
]

export const reqDescriptions = {
    BEDROOMS : "Number of bedrooms",
    LOCATION : "Is it in central London?",
    GROSS_EXTERN_AREA : "Gross External Area"
}