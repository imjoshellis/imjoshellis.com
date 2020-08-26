import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Mail } from '../../assets/heroicons/outline'

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(true)
  const [lastYPos, setLastYPos] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const Y = window.scrollY
      if (Y < lastYPos - 10) {
        setIsScrollingUp(true)
        setLastYPos(Y)
      } else if (Y > lastYPos + 10) {
        setIsScrollingUp(false)
        setLastYPos(Y)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastYPos])

  return (
    <motion.div
      className='sticky top-0 z-50 py-2 bg-gray-100 bg-opacity-50 shadow backdrop-blur'
      initial={{ opacity: 1 }}
      animate={{
        opacity: isScrollingUp ? 1 : 0,
        y: isScrollingUp ? 0 : '-50px'
      }}
    >
      <div className='flex flex-wrap justify-between gap-2'>
        <h1 className='text-xl font-bold'>@imjoshellis</h1>
        <div className='flex gap-4 text-xs'>
          <a
            href='mailto:josh@imjoshellis.com'
            className='flex items-center justify-center p-1 px-2 font-bold tracking-wide uppercase transition duration-200 border-2 border-transparent rounded bg-blue-70 hover:bg-blue-60 hover:text-white focus:outline-none focus:border-blue-10'
          >
            <Mail className='w-4 h-4 mr-1' />
            Email Me
          </a>
          {/*<button className='flex items-center justify-center p-1 px-2 font-bold tracking-wide uppercase transition duration-200 border-2 border-transparent rounded bg-gray-70 hover:bg-gray-50 hover:text-white focus:outline-none focus:border-gray-10'>
            <DocumentText className='w-4 h-4 mr-1' />
            resume
  </button>*/}
        </div>
      </div>
    </motion.div>
  )
}

export default Header
