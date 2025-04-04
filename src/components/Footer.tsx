'use client'

import React, { JSX } from 'react'

function FooterLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}): JSX.Element {
  return (
    <a
      className="text-stone-600 dark:text-stone-400 underline hover:text-stone-800 dark:hover:text-stone-200"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

export function Footer(): JSX.Element {
  return (
    <>
      <div className="h-[100px]" /> {/* Spacer to account for footer height */}
      <footer className="fixed bottom-0 left-0 right-0 text-center py-2.5 pb-4 text-xs border-t border-stone-200 dark:border-stone-700 shadow-[0_-1px_2px_rgba(0,0,0,0.04)] dark:shadow-[0_-1px_2px_rgba(255,255,255,0.04)] bg-white dark:bg-stone-900">
        <div className="flex flex-col items-center space-y-1 px-4 sm:px-6 md:px-8">
          <div className="flex items-center space-x-2">
            <p className="text-stone-600 dark:text-stone-400">
              &copy; {new Date().getFullYear()}&nbsp;
              <strong>codeguru</strong> All rights reserved{' '}
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
