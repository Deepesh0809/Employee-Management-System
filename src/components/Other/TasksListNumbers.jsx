import React from 'react'

const TasksListNumbers = () => {
  return (
    <div className='flex mt-10 justify-between gap-5'>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-red-400'>
            <h2 className='text-3xl font-semibold' >0</h2>
            <h3 className='text-xl font-medium' >New Task</h3>
        </div>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-blue-400'>
            <h2 className='text-3xl font-semibold' >0</h2>
            <h3 className='text-xl font-medium' >New Task</h3>
        </div>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-green-400'>
            <h2 className='text-3xl font-semibold' >0</h2>
            <h3 className='text-xl font-medium' >New Task</h3>
        </div>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-yellow-400'>
            <h2 className='text-3xl font-semibold' >0</h2>
            <h3 className='text-xl font-medium' >New Task</h3>
        </div>
    </div>
  )
}

export default TasksListNumbers