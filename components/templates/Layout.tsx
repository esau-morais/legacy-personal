import { Transition } from '@headlessui/react'
import Link from 'next/link'
import cx from 'clsx'
import { FOCUS_VISIBLE_OUTLINE } from '@/lib/constants'
import { FC, Fragment, HTMLAttributes, PropsWithChildren } from 'react'
import { Footer, GradientBackground, Navigation, ProfileImage } from '..'

type TLayoutProps = {
  showNav?: boolean
} & HTMLAttributes<HTMLDivElement>

const Layout: FC<PropsWithChildren<TLayoutProps>> = ({
  children,
  showNav = true,
  className,
}) => {
  return (
    <div
      className={cx(
        'min-h-screen bg-[#0e0c0b] antialiased selection:bg-purple-600/90 selection:text-white',
        className
      )}
    >
      <div className="relative z-10 w-full mx-auto sm:max-w-screen-sm">
        <GradientBackground />
      </div>

      <Transition
        as={Fragment}
        show={showNav}
        enter="transition duration-100 ease-in-out"
        enterFrom="opacity-0 scale-90"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in-out"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="fixed z-30 w-full top-6">
          <div className="mx-auto w-full px-[15px] sm:max-w-screen-sm">
            <div className="flex items-center justify-between rounded-2xl bg-white/[3%] px-4 py-2.5 shadow-surface-glass backdrop-blur backdrop-filter firefox:bg-gray-900 firefox:bg-opacity-90 sm:px-6">
              <div className="flex items-center space-x-6">
                <Link
                  href="/"
                  title="Go to homepage"
                  className={cx('rounded-full', FOCUS_VISIBLE_OUTLINE)}>

                  <ProfileImage size="small" isInteractive />

                </Link>
              </div>
              <Navigation />
            </div>
          </div>
        </div>
      </Transition>

      <main className="relative z-10 w-full px-4 pt-48 mx-auto sm:max-w-screen-sm">
        {children}

        <Footer />
      </main>
    </div>
  );
}

export default Layout
