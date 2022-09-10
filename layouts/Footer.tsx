import { FOCUS_VISIBLE_OUTLINE, LINK_SUBTLE_STYLES } from '@/lib/constants'
import cx from 'clsx'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const CurrentPlaying = dynamic(() => import('./CurrentPlaying'))

export const Footer = () => {
  return (
    <div className="mt-36 pb-36">
      <CurrentPlaying />

      <div className="text-gray-500">
        <div className="flex flex-col justify-between lg:flex-row">
          <div className="flex space-x-4">
            <div>
              <Link href="/projects">
                <a className={cx(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}>
                  Projects
                </a>
              </Link>
            </div>
            <div>
              <Link href="/blog">
                <a className={cx(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}>
                  Posts
                </a>
              </Link>
            </div>
          </div>

          <div className="pt-2 space-x-6 font-medium lg:pt-0">
            <a
              href="https://linkedin.com/in/emmorais"
              className={cx(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/esau-morais"
              className={cx(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}
            >
              GitHub
            </a>
            <a
              href="https://twitter.com/lil0serboy"
              className={cx(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}
            >
              Twitter
            </a>
          </div>
        </div>
      </div>

      <p className="mt-8 text-gray-600">
        Built with{' '}
        <a
          href="https://nextjs.org"
          className={cx(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}
        >
          Next.js
        </a>
        ,{' '}
        <a
          href="https://github.com/jonschlinkert/gray-matter"
          className={cx(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}
        >
          Gray-Matter
        </a>
        ,{' '}
        <a
          href="https://tailwindcss.com"
          className={cx(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}
        >
          Tailwind
        </a>{' '}
        and{' '}
        <a
          href="https://vercel.com"
          className={cx(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}
        >
          Vercel
        </a>
      </p>

      <p className="mt-4 text-gray-600">
        Inspired by{' '}
        <a
          href="https://delba.dev"
          className={cx(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}
        >
          Delba
        </a>
      </p>
    </div>
  )
}
