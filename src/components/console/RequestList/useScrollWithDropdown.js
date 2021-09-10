import {useEffect,useRef } from 'react'

export function useScrollWithDropdown() { 
    const ulRef = useRef(null) 
    const buttonRef = useRef(null)

    const handleMouseScroll = () => {
        const el =buttonRef.current.getBoundingClientRect()
        ulRef.current.style.top = String(Math.round(el.y+20))+'px'    
        ulRef.current.style.left = String(Math.round(el.x-20))+'px'
    };

    const handleMouseClick = () => {
        const el = buttonRef.current.getBoundingClientRect()
        if(ulRef.current.style.display === 'none' || ulRef.current.style.display === ''){
            ulRef.current.style.top = String(Math.round(el.y+20))+'px'    
            ulRef.current.style.left = String(Math.round(el.x-20))+'px'
            ulRef.current.style.display = 'block'   
        }else ulRef.current.style.display = 'none'
    }

    const handleClickOutside = (event) => {
        if (!ulRef.current || ulRef.current.contains(event.target) || buttonRef.current.contains(event.target)) {
            return;
        }
        ulRef.current.style.display = 'none'
    }

    useEffect(
      () => {
        const scroll = document.getElementById('scroll')
        const button = buttonRef.current
        if (button && scroll) {
            button.addEventListener("click", handleMouseClick);
            scroll.addEventListener("scroll", handleMouseScroll);
            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("touchstart", handleClickOutside);
          return () => {
            button.removeEventListener("click", handleMouseClick);
            scroll.removeEventListener("scroll", handleMouseScroll);
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
          };
        }
      },
      [] 
    );

    return [buttonRef, ulRef];
} 