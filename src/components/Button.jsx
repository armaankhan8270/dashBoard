import React from 'react'

const Button = ({color,bgColor,size,text,borderRadius}) => {
  return (
    <div>
      <button
      type='button' style={{backgroundColor:bgColor,color:color,borderRadius}}
      className={`text-${size} p-3`}>

      {text}
      </button>
    </div>
  )
}

export default Button
