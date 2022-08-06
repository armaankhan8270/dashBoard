import React,{useContext,createContext,useState} from "react";

const StateContext=createContext()

const initialState={
    chat:false,
    chart:false,
    userProfile:false,
    notification:false

}
export const ContextProvider = ({ children }) => {
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
  
    
  
}
export const useStateContext = () => useContext(StateContext);
 const armaan=()=>{
    return(
        <div>

        </div>
    )
}
export {armaan}