"use client"
import { useTheme } from 'next-themes'
import React from 'react'

const Sidebar = () => {
  const {theme} = useTheme()
  return (
    <div className='flex items-center justify-center fixed w-full h-full bg-slate-500 top-[10vh] dark:bg-slate-900 transition-all duration-1000'>
      <h3>you have choosen:</h3>
       <h1> {theme === 'dark' ? 'DARK mode': 'LIGHT mode' } </h1>
    </div>
  )
}

export default Sidebar