import React, { Component } from 'react';
import "./main.css";

import TaskItem from './TaskItem';

export default class TaskList extends Component {
  render() {
    return (
      <div>
        <div>Number of tasks: {this.props.tasks.filter(task=>!task.complete).length}</div>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.props.tasks.map((task, index) => (
            <TaskItem key={index} taskItem={task} id={index} deleteTask={this.props.deleteTask} editTask={this.props.editTask}
              toggleTask={this.props.toggleTask} />
          ))}
        </tbody>
   
      </table>
      </div>
    );
  }
}