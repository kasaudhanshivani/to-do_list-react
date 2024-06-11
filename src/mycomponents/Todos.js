import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo'; // Correct path to the individual Todo component

const Todos = (props) => {
  return (
    <div className='container'>
      <h3 className='text-center my-3'>To-dos List</h3>
      {props.todos.length === 0 ? (
        "No Todos to display"
      ) : (
        props.todos.map((todo) => {
          return <Todo key={todo.sno} todo={todo} onDelete={props.onDelete} />
        })
      )}
    </div>
  );
}

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      sno: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired
};

export default Todos;
