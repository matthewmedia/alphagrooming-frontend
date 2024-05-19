'use client'

import Link from 'next/link'
import classNames from 'classnames'
import { twMerge } from 'tailwind-merge'
import Image from 'next/image'
import React from "react";


const Logo = () => {
  return (
    <Link href={'/'} className="block">
      <Image
        src={'/alpha-grooming-bg-clear.png'}
        alt="Alpha Grooming logo"
        height="120"
        width="120" 
        className={twMerge(
          classNames(
            'h-40 tablet:h-[100px] object-contain object-left', 
          )
        )}
      />
    </Link>
  )
}

export default Logo;