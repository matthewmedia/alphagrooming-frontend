
"use client"


import Layout from '@/components/Layout/Layout';
import React, { PropsWithChildren, SetStateAction, useState } from 'react';

interface LayoutContextType {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
    isMobile: boolean;
    screenSize: {
        width: number;
        height: number;
    }
    setScreenSize: React.Dispatch<React.SetStateAction<{
        width: number;
        height: number;
    }>>;
}


export const LayoutContext = React.createContext<LayoutContextType>({
    isSidebarOpen: false,
    toggleSidebar: () => {},
    isMobile: false,
    screenSize: {
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0
    },
    setScreenSize: () => ({ 
        width: typeof window !== 'undefined' ? window.innerWidth : 0, 
        height: typeof window !== 'undefined' ? window.innerHeight : 0 
    })

});

export const LayoutContextProvider = ({ children } : PropsWithChildren) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [screenSize, setScreenSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0
    });
    
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const values : LayoutContextType = {
        isSidebarOpen,
        toggleSidebar,
        isMobile: screenSize.width < 768,
        screenSize,
        setScreenSize
    };
    
    return (
        <LayoutContext.Provider value={values}>
            {children}
        </LayoutContext.Provider>
    );
}