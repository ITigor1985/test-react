import { Component } from "react"

class Form extends Component {

    state={
        inputeValue1:'GGG',
        inputeValue2:'GGG'
    }

    handleInputeChange = (event) => {
        this.setState({inputeValue:event.target.name.value})
        console.log(event.target)
    }

    render(){
        return (
        <form>
            <input type='text' name="1" value={this.state.inputeValue1} onChange={this.handleInputeChange}/>
            <input type='text' name="2" value={this.state.inputeValue2} onChange={this.handleInputeChange}/>
            </form>)
    }

}

export default Form