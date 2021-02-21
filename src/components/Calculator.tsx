import { render } from '@testing-library/react';
import React from 'react'

const Calculator = (props: any) => {
    //var storedUseClass = localStorage.getItem('useClass');
    return(
        <div>
            <p>{JSON.stringify(props.useClass)}</p>
        </div>
    )
}

export default Calculator