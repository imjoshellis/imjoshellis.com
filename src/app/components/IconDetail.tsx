import React, { FunctionComponent, ReactElement } from 'react'

interface IconDetailProps {
  icon: ReactElement
  text: String | ReactElement
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

const toNum = (size: string) => {
  switch (size) {
    case 'xs':
      return '3'
    case 'sm':
      return '3'
    case 'md':
      return '4'
    case 'lg':
      return '5'
    case 'xl':
      return '6'
    default:
      return '3'
  }
}

export const IconDetail: FunctionComponent<IconDetailProps> = ({
  icon,
  text,
  size
}) => (
  <>
    {/* empty div with all possible classes for tailwindcss build purge */}
    <div className='hidden w-2 w-3 w-4 w-5 w-6 h-2 h-3 h-4 h-5 h-6 text-xs text-sm text-lg text-xl text-md ' />
    <div
      className={`flex relative items-center text-${size} leading-4 text-gray-30 mt-1`}
    >
      <div className={`w-${toNum(size)} h-${toNum(size)} mr-1 text-green-40`}>
        {icon}
      </div>
      <div className='w-64 truncate'>{text}</div>
    </div>
  </>
)

export default IconDetail
