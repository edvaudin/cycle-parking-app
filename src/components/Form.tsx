import React, { FC, useState, ChangeEvent, FormEvent } from 'react'
import { UseClass } from '../types'
import Calculator from './Calculator'
import { useClassList, reqDescriptions } from './data'

export const Form = () => {
    const [selectedUseClass, setSelectedUseClass] = useState(0)
    const [parameterValue, setParameterValue] = useState({ useClass: "", requirements: {} as { [name: string]: string } })

    const renderedUseClassList = useClassList.map((useClass, index) => {
        return (
            <option key={index} value={index} >
                {useClass.description}
            </option>
        )
    })

    const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        var selectedUseClass = e.target.selectedIndex;
        setSelectedUseClass(selectedUseClass);
        setParameterValue(prevUseClass => {
            prevUseClass.useClass = useClassList[selectedUseClass].description;
            return JSON.parse(JSON.stringify(prevUseClass));;
        });
    };

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        localStorage.setItem("useClass", JSON.stringify(parameterValue));
    }

    return (
        <div className="container">
            <h2>Select a policy</h2>
            <select>
                <option>New London Plan Policy T5</option>
            </select>
            <h2>Select a land use</h2>
            <form onSubmit={handleSubmit}>
                <select className="useClassList" value={selectedUseClass} onChange={handleSelect}>
                    {renderedUseClassList}
                </select>
                <br />
                {useClassList[selectedUseClass].requirements.map((requirement, index) => {
                    return (
                        <div>
                            <label>{reqDescriptions[requirement]}</label>
                            <input
                                type="number"
                                style={{ width: "10%" }}
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
                        </div>

                    )
                })}
                <br />
                {/*<button>Add land-use</button>*/}
            </form>
            <Calculator useClass={parameterValue} />
        </div>
    )
}

export default Form