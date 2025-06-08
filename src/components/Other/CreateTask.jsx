import React from 'react'

const CreateTask = () => {
    return (
        <div>
            <form className='flex flex-wrap w-full bg-[#1c1c1c] items-start justify-between p-5 mt-10' >
                <div className='w-1/3 ' >
                    <div className='mt-2'>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input className='w-[100%] bg-transparent border border-gray-400' type="text" placeholder='Make a UI design' />
                    </div>
                    <div className='mt-2'>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input className='w-[100%] bg-transparent border border-gray-400' type="date" />
                    </div>
                    <div className='mt-2'>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
                        <input className='w-[100%] bg-transparent border border-gray-400' type="text" placeholder='Employee Name' />
                    </div>
                    <div className='mt-2'>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input className='w-[100%] bg-transparent border border-gray-400' type="text" placeholder='Design, Dev, Etc' />
                    </div>
                </div>
                <div className='w-1/3 flex  flex-col items-start' >
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400' ></textarea>
                    <button className='w-[100%] bg-green-400 hover:bg-emerald-600 rounded mt-5 p-2' >Create Task</button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask