import React from 'react'

const Form = ({handleEvent, eventTypes}) => {
  let inputRef

  const handleCreate = e => {
    e.preventDefault()
    handleEvent({type: eventTypes.CREATE_TASK, payload: inputRef.value})
    inputRef.value = ''
  }

  return (
    <form onSubmit={handleCreate}>
      <input type="text"
             placeholder="Add todo"
             autoFocus
             required
             ref={r => (inputRef = r)}/>
      <button>Create</button>
    </form>
  )
}

export default Form