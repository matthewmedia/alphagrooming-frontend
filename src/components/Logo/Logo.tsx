'use client'

import Link from 'next/link'
import classNames from 'classnames'
import { twMerge } from 'tailwind-merge'
import React from "react";

interface Props {
  isDarkTheme?: boolean
  className?: string
  to?: string
}

const Logo = ({ isDarkTheme, className, to = '/' } : Props) => {
  return (
    <Link href={to} className="block">
      <img
        src={isDarkTheme ? '/alpha.png' : '/alpha.png'}
        alt="fileforms logo"
        height="120" // Increase this value to make the logo bigger
        className={twMerge(
          classNames(
            'h-40 tablet:h-[100px] object-contain object-left', // Adjust these values as well
            className
          )
        )}
      />
    </Link>
  )
}

export default Logo;