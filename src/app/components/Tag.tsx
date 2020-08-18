import React, { FunctionComponent } from 'react'
import Icon from '../../assets/icons'

interface TagProps {
  name: string
}

export const Tag: FunctionComponent<TagProps> = ({ name }) => {
  const generateTagWrap = (name: string) => {
    const classnames = [
      'flex flex-row items-center mr-2 mb-2 rounded text-xs shadow-md overflow-hidden transition duration-200'
    ] as String[]
    const baseColor = 'bg-gray-70 text-gray-30'
    const specialNames = [
      {
        name: 'ruby on rails',
        classes: 'bg-red-80 text-red-20 select-none'
      },
      { name: 'react', classes: 'bg-teal-70 text-teal-20' }
    ]
    const idx = specialNames.findIndex(o => o.name === name)
    if (idx >= 0) {
      classnames.push(specialNames[idx].classes)
    } else {
      classnames.push(baseColor)
    }
    return classnames.join(' ')
  }
  const generateIcon = (name: string) => {
    const classnames = ['w-5 h-5 p-1'] as String[]
    const specialNames = [
      { name: 'ruby on rails', classes: 'bg-red-60' },
      { name: 'react', classes: 'bg-teal-50' }
    ]
    let icon
    const idx = specialNames.findIndex(o => o.name === name)
    if (idx >= 0) {
      classnames.push(specialNames[idx].classes)
      icon = <Icon kind={name} className={classnames.join(' ')} />
    }
    return icon
  }

  const tagWrap = generateTagWrap(name)
  const icon = generateIcon(name)

  return (
    <>
      <div className={tagWrap}>
        {icon && icon}
        <div className='flex-grow px-2'>{name}</div>
      </div>
    </>
  )
}

export default Tag
