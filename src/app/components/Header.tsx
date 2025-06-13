'use client'
import { useEffect, useState } from 'react'

export default function Header() {
  const [isDark, setIsDark] = useState(false)
  const [scroll, setScroll] = useState(0)

  // 다크모드 토글
  const toggleDark = () => {
    setIsDark(prev => !prev)
    document.documentElement.classList.toggle('dark')
  }

  // 스크롤 퍼센트 계산
  const handleScroll = () => {
    const winScroll = document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrolled = (winScroll / height) * 100
    setScroll(scrolled)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-300 dark:bg-gray-700 z-50">
        <div
          className="h-full bg-blue-500 transition-all duration-75"
          style={{ width: `${scroll}%` }}
        />
      </div>

      {/* Header */}
      <header className="fixed top-1 left-1 z-50 p-4">
        <button
          onClick={toggleDark}
          className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white px-3 py-1 rounded shadow"
        >
          {isDark ? '☀️ Light' : '🌙 Dark'}
        </button>
      </header>
    </>
  )
}
