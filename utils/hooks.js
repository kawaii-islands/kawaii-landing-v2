//@ts-nocheck
import { useState, useEffect } from "react";

export function useCheckMobileScreen(currentWidth = 768) {
    const [width, setWidth] = useState();
    
    const handleWindowSizeChange = () => {
            setWidth(window.innerWidth);
    }

    useEffect(() => {
        setWidth(window.innerWidth);
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    return (width <= currentWidth);
}