import React, { useState, useEffect } from 'react'

const [isScrolled, setIsScrolled] = useState(false)

useEffect(() => {
  const onScroll = () => {
    const isScrolled = window.scrollY > 50
    setIsScrolled(isScrolled)
  }

  window.addEventListener('scroll', onScroll)

  return () => {
    window.removeEventListener('scroll', onScroll)
  }
}, [])
