import React from 'react'
import Header from '../Other/Header'
import TasksListNumbers from '../Other/TasksListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div>
        <div className='p-10 bg-[#1C1C1C] h-screen'>
            <Header/>
            <TasksListNumbers />
            <TaskList/>
        </div>
    </div>
  )
}

export default EmployeeDashboard