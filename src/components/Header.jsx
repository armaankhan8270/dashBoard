import React from 'react'

const Header = ({categorey ,title}) => {
  return (
    <div className='bg-white-100 shadow-lg h-48 rounded-xl m-12'>
      <div className='mt-10 pt-10 ml-10 text-gray-300 uppercase'>
        {categorey}
      </div>
      <div className='ml-10 font-extrabold text-3xl sha sha'>
        {title}
      </div>
    </div>
  )
}

export default Header
