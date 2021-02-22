import { render } from '@testing-library/react';
import React from 'react'

const Calculator = (props: any) => {
    //var storedUseClass = localStorage.getItem('useClass');]
    var longSpaces;
    var shortSpaces;
    
    switch(props.useClass.useClass){
        case "Food retail": CalculateA1FoodSpaces()
            break;
        case "Hotel":
            longSpaces = Math.round(props.useClass.requirements.BEDROOMS / 20);
            shortSpaces = Math.round(props.useClass.requirements.BEDROOMS / 50);
            break;
        case "Student Accommodation":
            longSpaces = Math.round(props.useClass.requirements.BEDROOMS * 0.75);
            shortSpaces = Math.round(props.useClass.requirements.BEDROOMS / 40);
            break;
        case "Light industry and research and development":
            longSpaces = Math.round(props.useClass.requirements.GROSS_EXTERN_AREA / 250);
            shortSpaces = Math.round(props.useClass.requirements.GROSS_EXTERN_AREA / 1000);
            break;
        default: longSpaces = shortSpaces = 0;

    }

    function CalculateA1FoodSpaces() {
            if (props.useClass.requirements.GROSS_EXTERN_AREA >= 100){
                longSpaces = Math.round(props.useClass.requirements.GROSS_EXTERN_AREA / 175);
            }
            if (props.useClass.requirements.LOCATION != 0){
                if (props.useClass.requirements.GROSS_EXTERN_AREA <= 750){
                    shortSpaces = Math.round(props.useClass.requirements.GROSS_EXTERN_AREA / 20);
                }
                else{
                    shortSpaces = 37.5 + Math.round(props.useClass.requirements.GROSS_EXTERN_AREA / 150);
                }
            } else {
                if (props.useClass.requirements.GROSS_EXTERN_AREA <= 750){
                    shortSpaces = Math.round(props.useClass.requirements.GROSS_EXTERN_AREA / 40);
                }
                else{
                    shortSpaces = 18.75 + Math.round(props.useClass.requirements.GROSS_EXTERN_AREA / 300);
                }
            }
    }
    return(
        <div>
            <p>Long-stay spaces: {longSpaces}</p><br />
            <p>Short-stay spaces: {shortSpaces}</p>
        </div>
    )
}

export default Calculator