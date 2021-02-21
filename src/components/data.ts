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
    BEDROOMS : "bedroom description",
    LOCATION : "location description",
    GROSS_EXTERN_AREA : "gross extern area description"
}