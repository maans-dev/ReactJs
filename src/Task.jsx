import React from 'react'

const Task = (props) => {
  return (
    <div className='task'>
        <h1>
            {props.taskName}
        </h1>
        <button onClick={()=> deleteTask(props.id)
}>
            
        </button>
    </div>
  )
}

export default Task