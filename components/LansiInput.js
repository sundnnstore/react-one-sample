import  React, { Component } from 'react'

class LansiInput extends Component {

constructor(props,context) {
     super(props, context)
     this.state = {
      inputText: ''
                 }
         }

handleChange(event) {
 this.setState(
     {
         inputText:event.target.value
     }
 )

}

handleSubmit(event){
    event.preventDefault()
    this.props.addTolansi(this.state.inputText)
}
render() {
return (
    <div>
<form onSubmit={this.handleSubmit.bind(this)}>
     <input 
       type='text'
       placeholder='type your name here'
       value={this.state.InputText}
       onChange={this.handleChange.bind(this)}
       />
 <input type='submit' text='submit' />
</form>
    </div>
)

}

}
export default LansiInput