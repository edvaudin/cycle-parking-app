import React, { FC, useState, ChangeEvent, FormEvent } from 'react'
import { UseClass } from '../types'
import {useClassList, reqDescriptions} from './data'

export const Form = () => {
    const [selectedUseClass, setSelectedUseClass] = useState(0)
    const [parameterValue, setParameterValue] = useState({useClass:"",requirements:{} as {[name:string]:string}})

    const renderedUseClassList = useClassList.map((useClass, index) => {
        return (
            <option key={index} value={index} >
                {useClass.description}
            </option>
        )
    })

    const handleSelect = (e : ChangeEvent<HTMLSelectElement>) => {
        var selectedUseClass = e.target.selectedIndex;
        setSelectedUseClass(selectedUseClass);
        setParameterValue(prevUseClass => { prevUseClass.useClass = useClassList[selectedUseClass].description; return JSON.parse(JSON.stringify(prevUseClass)); ; });
    };

    const handleSubmit = () => {
        localStorage.setItem("useClass", JSON.stringify(parameterValue));
    }

    return (
        <div>
            <h2>Select a use class...</h2>
            <form onSubmit={handleSubmit}>
                    <select className="useClassList" value={selectedUseClass} onChange={handleSelect}>
                        {renderedUseClassList}
                    </select>
                    <br />
                        {useClassList[selectedUseClass].requirements.map((requirement, index) => {
                            return (
                                <input 
                                    type="text" 
                                    style={{width:"500px"}}
                                    key={index} 
                                    name={index.toString()}
                                    placeholder={reqDescriptions[requirement]} 
                                    value={parameterValue.requirements[requirement] || ""}
                                    onChange={(e) => { 
                                        setParameterValue(prevUseClass => { 
                                            prevUseClass.requirements[requirement] = e.target.value; 
                                            return JSON.parse(JSON.stringify(prevUseClass)); 
                                        });
                                    }}
                                />
                            )
                        })}
                    <br />
                    <button>Add land-use</button>
                    <div>{JSON.stringify(parameterValue)}</div>
                </form>
        </div>
    )
}

export default Form