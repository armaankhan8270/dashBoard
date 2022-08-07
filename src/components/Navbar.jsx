// import React from 'react'
import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

// import avatar from '../data/avatar.jpg';
import avatar from '../data/avatar.jpg'
import { Cart, Chat, Notification, UserProfile } from '.';
// import { useStateContext } from '../contexts/ContextProvider';
import { useStateContext } from '../context/contextProvider';
const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>

);

const Navbar = () => {
  const {activeMenu, setActiveMenu,isClicked,setIsClicked,handleClick,screenSize,setScreenSize}=useStateContext()
 useEffect(()=>{
const handleScreen=()=>setScreenSize(window.innerWidth)
window.addEventListener('resize',handleScreen)
handleScreen()
return()=>(window.removeEventListener('resize',handleScreen))
 },[])
//  useEffect(()=>{
//   if(screenSize<=900){
//     setActiveMenu(false);}
//     else{
//       setActiveMenu(true)
//     }
//  })
  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <AiOutlineMenu onClick={()=>{setActiveMenu(!activeMenu)}} style={{color:'60px'}}/>
      <NavButton
      icon={<AiOutlineMenu/>} title='Menu' color='blue' onClick={()=>setActiveMenu(!activeMenu)}/>
        
<div className='flex'>
<NavButton icon={<FiShoppingCart/>} dotColor='black' title='Menu' color='blue' customFunc={()=>{handleClick('cart')}}/>
<NavButton icon={<BsChatLeft/>} dotColor='green' title='Menu' color='blue' customFunc={()=>{handleClick('chat')}}/>
<NavButton icon={<RiNotification3Line/>} dotColor='red' title='Menu' color='blue' customFunc={()=>{handleClick('notification')}}/>
<TooltipComponent content='Profile' position='BottomCenter'>
<div className='flex items-center gap-2 cursor-pointer p-1
 hover:bg-light-gray rounded-lg 'onClick={()=>{handleClick('userprofile')}}>
  <img src={avatar } className='rounded-full w-8 h-8' />
  <p>
    <span className='text-gray-400 text-14'>
      Hi,
    </span>
    <span className='text-gray-400 font-bold ml-1 text-14'>{''} Armaan</span>
    {/* Armaan */}
  </p>
  <MdKeyboardArrowDown/>
 </div>
</TooltipComponent>
{isClicked.cart &&<Cart/>}
{isClicked.chat &&<Chat/>}
{isClicked.notification &&<Notification/>}
{isClicked.userprofile &&<UserProfile/>}
</div>

     
    </div>
  )
}

export default Navbar
