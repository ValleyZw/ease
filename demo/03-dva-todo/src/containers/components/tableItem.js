import React from 'react'

const Item = ({todo, task, handleEvent, eventTypes}) => (
  <tr>
    <td style={{color: todo.isCompleted ? '#333' : '#ccc'}}>
      {todo.isEdit
        ? <input type="text"
                 autoFocus
                 onChange={e => handleEvent({type: eventTypes.UPDATE_TASK, payload: e.target.value})}
                 value={task}
                 required/>
        : todo.task}
    </td>
    <td>
      {
        todo.isEdit
          ? <React.Fragment>
            <button onClick={() => handleEvent({type: eventTypes.SAVE_TASK, payload: todo.task})}>
              Save
            </button>
            <button onClick={() => handleEvent({type: eventTypes.CANCEL_TASK, payload: todo.task})}>
              Cancel
            </button>
          </React.Fragment>
          : <React.Fragment>
            <button onClick={() => handleEvent({type: eventTypes.EDIT_TASK, payload: todo.task})}>
              Edit
            </button>
            <button onClick={() => handleEvent({type: eventTypes.FINISH_TASK, payload: todo})}>
              {todo.isCompleted ? 'Start' : 'Finish'}
            </button>
            <button onClick={() => handleEvent({type: eventTypes.DELETE_TASK, payload: todo.task})}>
              Delete
            </button>
          </React.Fragment>
      }
    </td>
  </tr>
)

export default Item