'use client'

import Link from 'next/link'
import classNames from 'classnames'
import { twMerge } from 'tailwind-merge'
import Image from 'next/image'
import React from "react";

interface Props {
  className?: string
  to?: string
}

const Logo = ({  className, to = '/' } : Props) => {
  return (
    <Link href={to} className="block">
      <Image
        src={'/alpha-grooming-bg-clear.png'}
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