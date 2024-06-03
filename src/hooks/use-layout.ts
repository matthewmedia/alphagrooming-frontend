"use client"
import React , { useContext } from "react";

import { LayoutContext } from "@/contexts/LayoutContextProvider/LayoutContextProvider";


export const useLayout = () => {

    const context = React.useContext(LayoutContext)

    if(context === undefined) {
        throw new Error('useLayoutContext must be used within a layoutcontext provider')
    }

    return context 
}