import { FOCUS_VISIBLE_OUTLINE } from '@/lib/constants'
import {
  ChatBubbleBottomCenterTextIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/solid'
import cx from 'clsx'
import Link from 'next/link'
import TwitterIcon from '../atoms/TwitterIcon'

const Navigation = () => {
  return (
    <div className="flex items-center leading-none space-x-7 text-rose-100/90 sm:text-lg">
      <Link
        href="/projects"
        className={cx('group rounded-lg', FOCUS_VISIBLE_OUTLINE)}>

        <div className="sm:flex sm:items-center sm:space-x-2">
          <div className="mb-1.5 flex justify-center sm:mb-0 sm:block">
            <div className="rounded-lg bg-gradient-to-tl from-blue-400/80 to-purple-600/80 p-1 shadow-lg transition-all duration-300 ease-out hover:scale-[1.2] hover:rounded-[10px] active:scale-100 active:rounded-lg group-hover:shadow-purple-500/50">
              <Squares2X2Icon
                aria-label="projects"
                className="w-[18px] transform text-rose-100 transition delay-100 duration-500 ease-out hover:scale-110"
              />
            </div>
          </div>
          <div className="transition-colors hover:text-rose-200/90">
            Projects
          </div>
        </div>

      </Link>
      <Link href="/blog" className={cx('group rounded-lg', FOCUS_VISIBLE_OUTLINE)}>

        <div className="sm:flex sm:items-center sm:space-x-2">
          <div className="mb-1.5 flex justify-center sm:mb-0 sm:block">
            <div className="rounded-lg bg-gradient-to-tl from-blue-400/80 to-purple-600/80 p-1 shadow-lg transition-all duration-300 ease-out hover:scale-[1.2] hover:rounded-[10px] active:scale-100 active:rounded-lg group-hover:shadow-purple-500/50">
              <ChatBubbleBottomCenterTextIcon
                aria-label="Posts"
                className="w-[18px] transform text-rose-100 transition delay-100 duration-500 ease-out hover:scale-110"
              />
            </div>
          </div>
          <div className="transition-colors hover:text-rose-200/90">
            Posts
          </div>
        </div>

      </Link>

      <a
        className={cx('group rounded-lg', FOCUS_VISIBLE_OUTLINE)}
        href="https://twitter.com/_3morais"
      >
        <div className="sm:flex sm:items-center sm:space-x-2">
          <div className="mb-1.5 flex justify-center sm:mb-0 sm:block">
            <div className="rounded-lg bg-gradient-to-tl from-blue-400/80 to-purple-600/80 p-1 shadow-lg transition-all duration-300 ease-out hover:scale-[1.2] hover:rounded-[10px] active:scale-100 active:rounded-lg group-hover:shadow-purple-500/50">
              <TwitterIcon
                aria-label="Twitter"
                className="w-[18px] transform text-rose-100 transition delay-100 duration-500 ease-out hover:scale-110"
              />
            </div>
          </div>
          <div className="transition-colors hover:text-rose-200/90">
            Twitter
          </div>
        </div>
      </a>
    </div>
  );
}

export default Navigation
