import React, { Component } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'
import UserInfo from './UserInfo'
import LansiInfo from './LansiInfo'
import LansiInput from './LansiInput'

class App extends Component {

  render() {
    return (
      <div>
        <h1>This is my Todo List</h1>
        <LansiInput addTolansi={this.props.actions.addTolansi}/>
        <LansiInfo lansi={this.props.lansi} actions={this.props.actions}/>
        <UserInfo user={this.props.user} actions={this.props.actions}/>
        <TodoInput addTodo={this.props.actions.addTodo}/>
        <TodoList actions={this.props.actions} todos={this.props.todos}/>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
