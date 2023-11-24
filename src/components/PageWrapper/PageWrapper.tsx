import React, { ComponentPropsWithoutRef } from 'react'

interface Props extends ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode
}

const PageWrapper = ({ children, className, ...rest }: Props) => {
  return (
    <div
      className={`max-w-screen-largeDesktop m-auto ${className ?? ''}`}
      {...rest}
    >
      {children}
    </div>
  )
}

export default PageWrapper
