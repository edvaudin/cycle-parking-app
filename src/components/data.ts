import { UseClass } from '../types'

export const useClassList : UseClass[] = [
    {
        description: "use class 1",
        requirements: [
            "BEDROOMS",
            "LOCATION"
        ]
    },
    {
        description: "use class 2",
        requirements: [
            "BEDROOMS"
        ]
    }
]

export const reqDescriptions = {
    BEDROOMS : "bedroom description",
    LOCATION : "location description",
    GROSS_EXTERN_AREA : "gross extern area description"
}