import { FOCUS_VISIBLE_OUTLINE } from '@/lib/constants'
import TwitterIcon from '@/layouts/TwitterIcon'
import AnnotationIcon from '@heroicons/react/solid/AnnotationIcon'
import ViewGridIcon from '@heroicons/react/solid/ViewGridIcon'
import cx from 'clsx'
import Link from 'next/link'
import React from 'react'

export default function Navigation() {
  return (
    <div className="flex items-center leading-none space-x-7 text-rose-100/90 sm:text-lg">
      <Link href="/projects">
        <a className={cx('group rounded-lg', FOCUS_VISIBLE_OUTLINE)}>
          <div className="sm:flex sm:items-center sm:space-x-2">
            <div className="mb-1.5 flex justify-center sm:mb-0 sm:block">
              <div className="rounded-lg bg-gradient-to-tl from-blue-400/80 to-purple-600/80 p-1 shadow-lg transition-all duration-300 ease-out hover:scale-[1.2] hover:rounded-[10px] active:scale-100 active:rounded-lg group-hover:shadow-purple-500/50">
                <ViewGridIcon className="w-[18px] transform text-rose-100 transition delay-100 duration-500 ease-out hover:scale-110" />
              </div>
            </div>
            <div className="transition-colors hover:text-rose-200/90">
              Projects
            </div>
          </div>
        </a>
      </Link>
      <Link href="/blog">
        <a className={cx('group rounded-lg', FOCUS_VISIBLE_OUTLINE)}>
          <div className="sm:flex sm:items-center sm:space-x-2">
            <div className="mb-1.5 flex justify-center sm:mb-0 sm:block">
              <div className="rounded-lg bg-gradient-to-tl from-blue-400/80 to-purple-600/80 p-1 shadow-lg transition-all duration-300 ease-out hover:scale-[1.2] hover:rounded-[10px] active:scale-100 active:rounded-lg group-hover:shadow-purple-500/50">
                <AnnotationIcon className="w-[18px] transform text-rose-100 transition delay-100 duration-500 ease-out hover:scale-110" />
              </div>
            </div>
            <div className="transition-colors hover:text-rose-200/90">
              Posts
            </div>
          </div>
        </a>
      </Link>

      <a
        className={cx('group rounded-lg', FOCUS_VISIBLE_OUTLINE)}
        href="https://twitter.com/lil0serboy"
      >
        <div className="sm:flex sm:items-center sm:space-x-2">
          <div className="mb-1.5 flex justify-center sm:mb-0 sm:block">
            <div className="rounded-lg bg-gradient-to-tl from-blue-400/80 to-purple-600/80 p-1 shadow-lg transition-all duration-300 ease-out hover:scale-[1.2] hover:rounded-[10px] active:scale-100 active:rounded-lg group-hover:shadow-purple-500/50">
              <TwitterIcon className="w-[18px] transform text-rose-100 transition delay-100 duration-500 ease-out hover:scale-110" />
            </div>
          </div>
          <div className="transition-colors hover:text-rose-200/90">
            Twitter
          </div>
        </div>
      </a>
    </div>
  )
}
