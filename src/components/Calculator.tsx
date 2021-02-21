import { render } from '@testing-library/react';
import React from 'react'

const Calculator = (props: any) => {
    //var storedUseClass = localStorage.getItem('useClass');]
    console.log(props.useClass.requirements.BEDROOMS)
    var longSpaces;
    var shortSpaces;
    switch(props.useClass.useClass){
        case "Hotel":
            longSpaces = props.useClass.requirements.BEDROOMS / 20;
            shortSpaces = props.useClass.requirements.BEDROOMS / 50;
            break;
        case "Student Accommodation":
            longSpaces = props.useClass.requirements.BEDROOMS * 0.75;
            shortSpaces = props.useClass.requirements.BEDROOMS / 40;
            break;
        default: longSpaces = 0;

    }
    return(
        <div>
            <p>Long-stay spaces: {longSpaces}</p><br />
            <p>Short-stay spaces: {shortSpaces}</p>
        </div>
    )
}

export default Calculator