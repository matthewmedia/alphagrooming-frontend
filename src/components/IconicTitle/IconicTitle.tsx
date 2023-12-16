
import { ComponentPropsWithoutRef } from 'react'


import React from 'react';

interface IconicTitleProps {
    title: string;
    icon: React.ReactNode;
}


interface Props extends ComponentPropsWithoutRef<'div'> {
    icon: React.ReactNode;
    children: React.ReactNode
  }
  

export const IconicTitle = ({  icon , children }: Props) => (
    <div className='flex items-center justify-center font-bold text-center space-x-2'>
        {icon}
        {children}
    </div>
);
  