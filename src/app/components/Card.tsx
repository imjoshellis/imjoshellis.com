import React, { FunctionComponent } from 'react'
import Icon from '../../assets/icons'

interface CardPropTypes {}

export const Card: FunctionComponent<CardPropTypes> = () => {
  let classes = {
    wrap: 'shadow',
    base: 'bg-gray-90 rounded-lg rounded-b-none overflow-hidden',
    img: 'h-48 flex flex-col justify-between text-gray-30 bg-gray-80 p-4 py-3',
    lastCommit: 'text-xs text-white pt-1',
    tags: 'flex flex-row flex-wrap',
    tag: {
      base:
        'flex flex-row items-center mr-2 mb-2 bg-gray-70 rounded text-xs text-gray-30 shadow-md overflow-hidden',
      icon: {
        react: 'w-5 h-5 mr-1 p-1 bg-teal-50',
        ruby: 'w-5 h-5 mr-1 p-1 bg-red-60'
      },
      name: 'flex-grow px-1 pr-2'
    },
    info: {
      base: 'flex flex-row justify-between pb-4 shadow-lg',
      descWrap: 'flex-grow px-4',
      header: 'px-4 pt-3 text-xl mb-1 text-white',
      description: 'text-xs text-gray-10',
      stats:
        'flex flex-col justify-center min-w-1/3 pl-4 border-l border-solid border-gray-80 text-gray-30 px-4',
      stat: 'mb-2 text-xs'
    },
    buttons: {
      base: 'flex flex-row text-sm font-bold uppercase',
      icon: 'h-4 w-4 mr-1',
      left:
        'min-w-1/3 flex flex-row justify-center items-center uppercase font-bold p-2 flex-grow bg-gray-60 rounded rounded-t-none rounded-r-none border-r border-solid border-gray-100 hover:bg-gray-50 hover:text-white',
      center:
        'min-w-1/3 flex flex-row justify-center items-center uppercase font-bold p-2 flex-grow bg-gray-60 border-r border-solid border-gray-100 hover:bg-gray-50 hover:text-white',
      right:
        'min-w-1/3 flex flex-row justify-center items-center uppercase font-bold p-2 flex-grow bg-blue-60 rounded rounded-t-none rounded-l-none hover:bg-blue-50 hover:text-white'
    }
  }
  return (
    <div className={classes.wrap}>
      <div className={classes.base}>
        <div className={classes.img}>
          <div className={classes.lastCommit}>Last Commit: 2 hours ago</div>
          <div className={classes.tags}>
            <div className={classes.tag.base + ' bg-teal-70 text-teal-20'}>
              <Icon kind='react' className={classes.tag.icon.react} />
              <div className={classes.tag.name}>React</div>
            </div>
            <div className={classes.tag.base + ' bg-red-80 text-red-20'}>
              <Icon kind='ruby' className={classes.tag.icon.ruby} />
              <div className={classes.tag.name}>Ruby on Rails</div>
            </div>
            <div className={classes.tag.base + ' bg-teal-70 text-teal-20'}>
              <Icon kind='react' className={classes.tag.icon.react} />
              <div className={classes.tag.name}>React</div>
            </div>
            <div className={classes.tag.base + ' bg-red-80 text-red-20'}>
              <Icon kind='ruby' className={classes.tag.icon.ruby} />
              <div className={classes.tag.name}>Ruby on Rails</div>
            </div>
            <div className={classes.tag.base + ' bg-teal-70 text-teal-20'}>
              <Icon kind='react' className={classes.tag.icon.react} />
              <div className={classes.tag.name}>React</div>
            </div>
            <div className={classes.tag.base + ' bg-red-80 text-red-20'}>
              <Icon kind='ruby' className={classes.tag.icon.ruby} />
              <div className={classes.tag.name}>Ruby on Rails</div>
            </div>
          </div>
        </div>
        <h3 className={classes.info.header}>Project Name</h3>
        <div className={classes.info.base}>
          <div className={classes.info.descWrap}>
            <div className={classes.info.description}>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has
              roots in a piece of classical Latin literature from 45 BC, making it over
              2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney...
            </div>
          </div>
          <div className={classes.info.stats}>
            <code className={classes.info.stat}>32 Commits</code>
            <code className={classes.info.stat}>3 PRs</code>
            <code className={classes.info.stat}>45k+ Lines</code>
          </div>
        </div>
      </div>
      <div className={classes.buttons.base}>
        <button className={classes.buttons.left}>
          <Icon kind='info' className={classes.buttons.icon} /> about
        </button>
        <button className={classes.buttons.center}>
          <Icon kind='github' className={classes.buttons.icon} /> GITHUB
        </button>
        <button className={classes.buttons.right}>
          <Icon kind='link' className={classes.buttons.icon} /> DEMO
        </button>
      </div>
    </div>
  )
}

export default Card
