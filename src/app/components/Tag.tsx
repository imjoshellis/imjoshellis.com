import React from 'react'

interface TagProps {
  name: string
}

export const Tag: React.FC<TagProps> = ({ name }) => {
  const generateTagWrap = (name: string) => {
    const classnames = [
      'flex flex-row items-center rounded text-xs shadow-md overflow-hidden transition duration-200 select-none'
    ] as String[]
    const baseColor = 'bg-gray-70 text-gray-20'
    const specialNames = [
      { name: 'apollo', classes: 'bg-purple-70 text-purple-20' },
      { name: 'graphql', classes: 'bg-pink-60 text-pink-20' },
      { name: 'javascript', classes: 'bg-yellow text-red-90' },
      { name: 'react', classes: 'bg-teal-60 text-teal-20' },
      { name: 'redux', classes: 'bg-purple-70 text-purple-20' },
      { name: 'ruby on rails', classes: 'bg-red-70 text-red-20' },
      { name: 'svelte', classes: 'bg-orange text-red-90' },
      { name: 'typescript', classes: 'bg-cyan-60 text-cyan-20' }
    ]
    const idx = specialNames.findIndex(o => o.name === name)
    if (idx >= 0) {
      classnames.push(specialNames[idx].classes)
    } else {
      classnames.push(baseColor)
    }
    return classnames.join(' ')
  }
  /* const generateIcon = (name: string) => {
    const classnames = ['w-5 h-5 p-1'] as String[]
    const specialNames = []
    let icon
    const idx = specialNames.findIndex(o => o.name === name)
    if (idx >= 0) {
      classnames.push(specialNames[idx].classes)
      icon = <Icon kind={name} className={classnames.join(' ')} />
    }
    return icon
  }*/

  const tagWrap = generateTagWrap(name)
  // const icon = generateIcon(name)

  return (
    <>
      <div className={tagWrap}>
        {/* {icon && icon} */}
        <div className='flex-grow px-2'>{name}</div>
      </div>
    </>
  )
}

export default Tag
