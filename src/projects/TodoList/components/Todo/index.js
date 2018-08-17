import React from 'react';
import './style.css';
import binDelete from './images/bin-delete.png';
import editItemImg from './images/edit.png';
import taskCompleteImg from './images/checked-box.png';
import taskNotCompleteImg from './images/unchecked-box.png';


class Todo extends React.Component {
  render() {
    let categoriesInfo = this.props.categoriesInfo; // <-- category object
    let taskCategories = this.props.taskCategories; // <-- each task category array
    let listCategories = taskCategories.map( item => categoriesInfo.find( category => category.id === item ) )

    console.log(listCategories)

    let onlyCategoryNames = [];

    for (let i = 0; i < listCategories.length; i++) {
      onlyCategoryNames.push(listCategories[i].category)
    }

    console.log(onlyCategoryNames)

    let checkBox = this.props.completed ? taskCompleteImg : taskNotCompleteImg;
    let completedTask = this.props.completed ? 'completed' : 'not-complete';
    let editing = this.props.isEditing ? (
      <React.Fragment>
        <input
          value={this.props.editingTask}
          onChange={this.props.whilstEditing}
        />
        <button
          className="btn btn-outline-success btn-sm"
          onClick={this.props.confirmEditTask}
          disabled={this.props.editingTask.trim() === '' }
        >
          Confirm
        </button>
        <button
          className="btn btn-outline-danger btn-sm"
          onClick={this.props.editTask}
        >
          Cancel
        </button>
      </React.Fragment>
    ) : (
      <span className={completedTask + " border rounded p-1 col-6 todo-bg"}>
        {this.props.todo}
      </span>
    );
    let showRemoveItem = (!this.props.isEditing) && (
      <React.Fragment>
        <img className="img-box" alt="Delete Task" src={binDelete} onClick={this.props.removeItem}/>
        <img className="img-box" alt="Edit Task" src={editItemImg} onClick={this.props.editTask}/>
      </React.Fragment>
    )

    return (
      <div className="row mt-2">
        <img className="img-box" alt="Check Box" src={checkBox} onClick={this.props.changeCompleted}/>
        {editing}
        {showRemoveItem}
        <div>
          {onlyCategoryNames}
        </div>
      </div>
    )
  }
}

export default Todo;
