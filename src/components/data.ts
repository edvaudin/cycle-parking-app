import { UseClass } from '../types'

export const useClassList : UseClass[] = [
    {
        description: "Hotel",
        requirements: [
            "BEDROOMS"
        ],
        requiredInputs:{}
    },
    {
        description: "Student Accommodation",
        requirements: [
            "BEDROOMS"
        ],
        requiredInputs:{}
    }
]

export const reqDescriptions = {
    BEDROOMS : "Number of bedrooms",
    LOCATION : "Is it in central London?",
    GROSS_EXTERN_AREA : "Gross External Area"
}