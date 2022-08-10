import React from 'react'
import{ColorPickerComponent}from '@syncfusion/ej2-react-inputs'
import { Header } from '../components'

const ColorPicker = () => {
  const color=(args)=>{
    document.getElementById('preview').style.backgroundColor=args.currentValue.hex
  }
  const colors=(args)=>{
    document.getElementsByClassName('preview').style.backgroundColor=args.currentValue.hex
    var val =args.currentValue.hex
  }
  return (
    <div change={color} className='bg-red-bg h-[72rem] bg-whi0 shadow-lg text-center  rounded-xl m-12'>
      <Header categorey={'App'} title='ColorPicker'/>
      <div  className='w-full rounded-lg  text-center'>
        <div className='mt-20  flex flex-wrap gap-10'>
          {/* <p className='text-3xl  font-semibold'>Inline Color Picker</p> */}
        <ColorPickerComponent
            id='inline-pallete'
            mode='Palette'
            modeSwitcher={false}
            inline
            showButtons={false}
            change={color}/>
        <ColorPickerComponent
            id='inline-pallete'
            mode='Picker'
            change={color}
            modeSwitcher={false}
            inline
            showButtons={false}/>
          <div>
            <div style={{border:'10px'}}>aaa</div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default ColorPicker