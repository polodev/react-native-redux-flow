import React, { Component } from 'react'
import { AppRegistry, View } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { actionCreators } from './todoListRedux'
import todoActions from './todoActions'
import List from './List'
import Input from './Input'
import Title from './Title'
function mapStateToProps (state) {
  return {
    todos : state.todos,
  }
}
const mapDispatchToProps = (dispatch) => ({
  todoActions : bindActionCreators(todoActions, dispatch)
})

class App extends Component {

  state = {}

  componentWillMount() {
    const {store} = this.props

    const {todos} = store.getState()

    this.setState({todos})

    this.unsubscribe = store.subscribe(() => {
      const {todos} = store.getState()
      this.setState({todos})
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }
  onAddTodo = (text) => {
    this.props.todoActions.add(text)
  }

  onRemoveTodo = (index) => {
   this.props.todoActions.remove(index)
  }

  render() {
    const {todos} = this.state
    return (
      <View>
        <Title>
          To-Do List
        </Title>
        <Input
          placeholder={'Type a todo, then hit enter!'}
          onSubmitEditing={this.onAddTodo}
        />
        <List
          list={todos}
          onPressItem={this.onRemoveTodo}
        />
      </View>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)

