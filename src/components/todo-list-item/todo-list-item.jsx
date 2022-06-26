import React, { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {
  render() {
    const {
      label,
      important,
      done,
      onDeleted,
      onToggleDone,
    } = this.props;

    const classNames = ['todo-list-item'];
    if (done) {
      classNames.push('done');
    }

    if (important) {
      classNames.push('important');
    }

    return (
      <span className={classNames.join(' ')}>
        <span
          className="todo-list-item-label"
          onClick={onToggleDone}
          onKeyPress={this.handleKeyPress}
          role="button"
          tabIndex="0"
        >
          {label}
        </span>


        <button
          className="btn btn-outline-danger btn-sm float-right"
          type="button"
          onClick={onDeleted}
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
