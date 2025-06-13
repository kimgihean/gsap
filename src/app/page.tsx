"use client"

import Header from './components/Header'
import SVGLogo from './components/SVGLogo'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  useEffect(() => {

    const sections = [aboutRef, projectsRef, contactRef]
    sections.forEach((ref) => {
      if (!ref.current) return
      gsap.from(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      })
    })
  }, [])

  return (
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center p-10 text-center">
        <SVGLogo />
        <h1 className="text-5xl font-bold mt-6">Welcome to My Portfolio</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mt-2">Built with Next.js, Tailwind, and GSAP</p>
      </section>

      {/* About */}
      <section ref={aboutRef} className="min-h-screen p-10 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="max-w-2xl text-gray-700 dark:text-gray-300">
          프론트엔드 개발자로서 사용자 중심의 UI와 애니메이션을 구현합니다. Tailwind와 GSAP을 좋아합니다.
        </p>
      </section>

      {/* Projects */}
      <section ref={projectsRef} className="min-h-screen p-10 bg-gray-200 dark:bg-gray-700">
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-600 p-6 rounded shadow">
            <h3 className="text-2xl font-semibold">Project A</h3>
            <p>React 기반 SPA 포트폴리오 웹사이트</p>
          </div>
          <div className="bg-white dark:bg-gray-600 p-6 rounded shadow">
            <h3 className="text-2xl font-semibold">Project B</h3>
            <p>GSAP과 Next.js로 만든 인터랙티브 앱</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section ref={contactRef} className="min-h-screen p-10 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-4xl font-bold mb-4">Contact</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-2">이메일로 연락주세요:</p>
        <a className="text-blue-500 underline" href="mailto:you@example.com">
          you@example.com
        </a>
      </section>
    </main>
  )
}
