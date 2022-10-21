import cx from 'clsx'
import Image from 'next/image'
import ProfilePicture from '@/public/myself.jpg'

const ProfileImage = ({
  size = 'large',
  isInteractive,
}: {
  size: 'small' | 'large'
  isInteractive?: boolean
}) => {
  return (
    <div
      className={cx(
        'rounded-full bg-gradient-to-tl from-blue-400/60 to-purple-600/60 shadow-lg ',
        {
          'p-[3px]': size === 'small',
          'p-1 ': size === 'large',
          'group transform transition ease-out hover:scale-105 hover:from-purple-700 hover:to-rose-400 hover:shadow-rose-500/25':
            isInteractive,
        }
      )}
    >
      <div
        className={cx('rounded-full bg-black/60 p-[2px]', {
          'h-[38px] w-[38px]': size === 'small',
          'h-[66px] w-[66px]': size === 'large',
        })}
      >
        <Image
          src={ProfilePicture}
          alt="A picture of Esau Morais"
          priority={true}
          className="rounded-full object-cover"
          width={size === 'small' ? 120.2 : 240.4}
          height={size === 'small' ? 120.2 : 240.4}
        />
      </div>
    </div>
  )
}

export default ProfileImage
