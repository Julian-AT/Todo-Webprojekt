import React from 'react'
import TodoList from '../components/TodoList'

const Today = () => {
  return (
    <div>
      <div className='flex flex-warp lg:flex-nowrap justify-between's>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-full rounded-xl w-full p-8 pt-9 m-3 text-center shadow-md'>
          <TodoList />
        </div>
      </div>
    </div>
  )
}

export default Today