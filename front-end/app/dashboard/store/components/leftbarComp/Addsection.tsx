import React from 'react'

function Addsection() {
  return (
    <div>
        <h1 className='text-xl mt-6'>sections</h1>
        <h3 className='text-sm text-gray-500 '>drag and drop it</h3>
        <div className='py-2 mt-2 flex flex-col gap-2'>
            <div draggable className='bg-white text-gray-700 duration-300 border hover:bg-primary hover:text-white rounded-md cursor-move hover:shadow-md p-4 w-full'>
              <h3>Header</h3>
              <p className='text-sm'>the navbar section</p>
            </div>
            <div className='bg-white text-gray-700 duration-300 border hover:bg-primary hover:text-white rounded-md cursor-move hover:shadow-md p-4 w-full'>
              <h3>Banner Section</h3>
              <p className='text-sm'>the hero section</p>
            </div>
            <div className='bg-white text-gray-700 duration-300 border hover:bg-primary hover:text-white rounded-md cursor-move hover:shadow-md p-4 w-full'>
              <h3>Footer</h3>
              <p className='text-sm'>the Footer section</p>
            </div>
        </div>
    </div>
  )
}

export default Addsection