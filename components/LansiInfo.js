import  React, { Component } from 'react'

class LansiInfo extends Component {

handlechangeName() {
     this.props.actions.changelansiname('sunyusssssssssssssss',12) 
}
render () {

return (
    <div>
    <div><h1>Hi, this is a my test react app {this.props.lansi.name} {this.props.lansi.id}</h1></div>
    <button onClick = {this.handlechangeName.bind(this)}>Change Name</button>
    </div>
)
}
}

export default LansiInfo