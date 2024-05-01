import React from 'react'
import Link from 'next/link'
import { Lilita_One } from 'next/font/google'
import { BackArrowIcon } from '@/app/components/icons'

const lilita = Lilita_One({ weight: '400', subsets: ['latin'] })

export const CMSNavbar = () => {
  return (
    <div className='flex justify-between item-center py-1 px-5'>
        <Link href='/'>
            <BackArrowIcon />
            <div className={`${lilita.className} text-3xl dark:text-amber-50`}>Dev <span className='text-purple-500'>Block</span></div>
        </Link>
    </div>
  )
}
