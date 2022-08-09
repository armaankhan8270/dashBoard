import React from 'react'

const Header = ({categorey ,title}) => {
  return (
    <div>
      <div className='mt-10'>
        {title}
      </div>
      <div className='font-extrabold text-3xl'>
        {categorey}
      </div>
    </div>
  )
}

export default Header
