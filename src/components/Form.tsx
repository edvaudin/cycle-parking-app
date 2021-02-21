import React, { FC, useState, ChangeEvent, FormEvent } from 'react'
import {useClassList, reqDescriptions} from './data'

export const Form: FC = () => {
    const [selectedUseClass, setSelectedUseClass] = useState(0)
    const [parameterValue, setParameterValue] = useState("")

    const renderedUseClassList = useClassList.map((useClass, index) => {
        return (
            <option key={index} value={index} >
                {useClass.description}
            </option>
        )
    })

    const handleSelect = (e : ChangeEvent<HTMLSelectElement>) => {
        setSelectedUseClass(e.target.selectedIndex)
    }

    const handleInput = (e : ChangeEvent<HTMLInputElement>) => {
        setParameterValue({[e.target.name]: e.currentTarget.value} as any)

        
    }

    const handleSubmit = () => {

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
                                    key={index} 
                                    name={index.toString()}
                                    placeholder={reqDescriptions[requirement]} 
                                    value={parameterValue || ''} 
                                    onChange={handleInput}
                                />
                            )
                        })}
                    <br />
                    <button>Add land-use</button>
                </form>
        </div>
    )
}

export default Form