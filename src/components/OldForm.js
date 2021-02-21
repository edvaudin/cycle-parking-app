import React, { useReducer, useState } from 'react'
import useClassList from './useClassList'

class OldForm extends React.Component {
    constructor() {
        super();
        
        this.state = ({
            isLoading: true,
            value: "",
            parameterValue: "",
            requirements: [],
            storedUseClasses: [],
            storedParameters: []
        })
        
        this.handleSelect = this.handleSelect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    // Simulated loading
    componentDidMount() {
        setTimeout(this.setState({ isLoading: false }), 3000);
    }

    handleSelect(event) {
        
        // Event target returns string, so we create a new array through .split(', ')
        var index = event.target.selectedIndex;
        console.log(index)
        var selectedUseClassRequirements = event.target.childNodes[index].getAttribute("req");
        var selectUseClassRequirementArray = selectedUseClassRequirements.split(', ');

        // Setting the selecting options through state and passing the relevant requirements into state.
        this.setState({
            value: event.target.value,
            requirements: selectUseClassRequirementArray
        })
    }

    handleSubmit(event){
        // Prevents the button from default refreshing of page.
        event.preventDefault();

        // Adding new selection to storage without mutating the state.
        this.setState(prevState => {
            const addedParameters = [...prevState.storedParameters, this.state.parameterValue]
            const addedToList = [...prevState.storedUseClasses, this.state.value]
            return {
                storedUseClasses: addedToList,
                storedParameters: addedParameters
            }
        })
        //console.log(this.state.storedParameters)
    }

    handleInput(event){
        //console.log([event.target.name])
        //console.log("This input has an index of: " + event.target.childNodes[index].getAttribute("key"))
        this.setState({
            parameterValue: event.target.value
        })
    }

    render() {
        // Maps useClassList to a new array of option elements.
        const renderedUseClassList = useClassList.map(useClass => {
            return <option 
                        key={useClass.id} 
                        req={useClass.requiredParameters}
                    >
                            {useClass.label}
                    </option>
        })

        // Maps state array to new list elements.
        const storedUseClassList = this.state.storedUseClasses.map((useClass, index) => {
            return <li key={index}>{useClass}</li>
        })
        
        // Maps stated requirements to new input elements.
        const requiredInputs = [...this.state.requirements].map((req, index) => {
            console.log("Requirement: " + req + " Index: " + index)
            return <input 
                        type="text" 
                        name={index}
                        key={index} 
                        placeholder={req} 
                        value={this.state.parameterValue} 
                        onChange={this.handleInput}
                    />
        })
        
        return (
            <div>
                <h2>Select a use class...</h2>
                <form onSubmit={this.handleSubmit}>
                    <select className="useClassList" value={this.state.value} onChange={this.handleSelect}>
                        {renderedUseClassList}
                    </select>
                    <br />
                    {requiredInputs}
                    <br />
                    <button>Add land-use</button>
                </form>
                <p>We'll need to know...</p>
                <h3>{this.state.requirements}</h3>

                <h2>Stored:</h2>
                <ul>{storedUseClassList}</ul>
            </div>
        )
    }
}

export default OldForm