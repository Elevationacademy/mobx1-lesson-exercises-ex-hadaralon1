import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class Item extends Component {
  checkItem = (e) => {
    this.props.store.checkItem(e.target.value)
  }
      editItem = () => {
       let location = prompt("Edit the location")
       this.props.store.editItem( this.props.item.name ,location)
      }
      deleteItem = () => {
        this.props.store.deleteItem(this.props.item.name)

      }
    render() {
     let item = this.props.item
        return (
            <div className = {item.completed ? "crossed" : null}>
            <input type="checkbox" onClick = {this.checkItem}  value={item.name}/><span> {item.name}</span><span>- {item.location}</span> 
            <button onClick={this.editItem} className="editButton">edit</button>
            <button onClick={this.deleteItem} className="deleteButton">delete</button></div>)

  }
}

export default Item