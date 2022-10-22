import { FOCUS_VISIBLE_OUTLINE, LINK_SUBTLE_STYLES } from '@/lib/constants'
import cx from 'clsx'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const CurrentPlaying = dynamic(() => import('../molecules/CurrentPlaying'))

const Footer = () => {
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
              target="_blank"
              rel="noopener noreferrer"
              className={cx(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/esau-morais"
              target="_blank"
              rel="noopener noreferrer"
              className={cx(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}
            >
              GitHub
            </a>
            <a
              href="https://twitter.com/_3morais"
              target="_blank"
              rel="noopener noreferrer"
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
          target="_blank"
          rel="noopener noreferrer"
          className={cx(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}
        >
          Next.js
        </a>
        ,{' '}
        <a
          href="https://github.com/jonschlinkert/gray-matter"
          target="_blank"
          rel="noopener noreferrer"
          className={cx(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}
        >
          Gray-Matter
        </a>
        ,{' '}
        <a
          href="https://tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
          className={cx(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}
        >
          Tailwind
        </a>{' '}
        and{' '}
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
          className={cx(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}
        >
          Vercel
        </a>
      </p>

      <p className="mt-4 text-gray-600">
        Inspired by{' '}
        <a
          href="https://delba.dev"
          target="_blank"
          rel="noopener noreferrer"
          className={cx(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}
        >
          Delba
        </a>{' '}
        and{' '}
        <a
          href="https://leerob.io"
          target="_blank"
          rel="noopener noreferrer"
          className={cx(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}
        >
          Lee
        </a>
      </p>
    </div>
  )
}

export default Footer
