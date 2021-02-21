import { UseClass } from '../types'

export const useClassList : UseClass[] = [
    {
        description: "use class 1",
        requirements: [
            "BEDROOMS",
            "LOCATION"
        ],
        requiredInputs:{}
    },
    {
        description: "use class 2",
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