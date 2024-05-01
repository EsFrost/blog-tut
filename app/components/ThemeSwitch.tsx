'use client'

import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from './icons'


export const ThemeSwitch = () => {
    const { theme, setTheme } = useTheme()
    const [ mounted, setMounted ] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

  return (
    <button className='border border-purple-500 rounded-2xl p-1 hover:bg-purple-500 hover:bg-opacity-10 dark:hover:bg-opacity-30' onClick={() => {setTheme(theme === 'dark' ? 'light' : 'dark')}}>
        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}
