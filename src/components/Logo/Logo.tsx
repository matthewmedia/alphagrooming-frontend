'use client'

import Link from 'next/link'
import classNames from 'classnames'
import { twMerge } from 'tailwind-merge'
import Image from 'next/image'
import React from "react";

interface Props {
  isDarkTheme?: boolean
  className?: string
  to?: string
}

const Logo = ({ isDarkTheme, className, to = '/' } : Props) => {
  return (
    <Link href={to} className="block">
      <Image
        src={isDarkTheme ? '/alpha.png' : '/alpha.png'}
        alt="Alpha Grooming logo"
        height="120"
        width="120" 
        className={twMerge(
          classNames(
            'h-40 tablet:h-[100px] object-contain object-left', 
            className
          )
        )}
      />
    </Link>
  )
}

export default Logo;