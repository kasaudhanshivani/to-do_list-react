import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ todo, onDelete }) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className='btn btn-danger' onClick={() => onDelete(todo.sno)}>Delete</button>
    </div>
  );
}

Todo.propTypes = {
  todo: PropTypes.shape({
    sno: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
  }).isRequired,
  onDelete: PropTypes.func.isRequired
};

export default Todo;
