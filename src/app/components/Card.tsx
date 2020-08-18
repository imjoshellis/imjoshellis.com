import React, { FunctionComponent } from 'react'
import moment from 'moment'
import { Code, InformationCircle, Link } from '../../assets/heroicons/solid'
import Icon from '../../assets/icons'

interface CardPropTypes {
  repoData: any
}

export const Card: FunctionComponent<CardPropTypes> = ({ repoData }) => {
  let classes = {
    wrap: 'shadow',
    base: 'bg-gray-90 rounded-lg rounded-b-none overflow-hidden',
    head: 'flex flex-col justify-between text-gray-30 bg-gray-80 p-4 py-3',
    lastCommit: 'text-xs text-white pt-1',
    tags: 'flex flex-row flex-wrap pt-2',
    tag: {
      base:
        'flex flex-row items-center mr-2 mb-2 bg-gray-70 rounded text-xs text-gray-30 shadow-md overflow-hidden transition duration-200',
      icon: {
        react: 'w-5 h-5 p-1 bg-teal-50',
        ruby: 'w-5 h-5 p-1 bg-red-60'
      },
      name: 'flex-grow px-1 px-2 capitalize'
    },
    info: {
      base: 'pb-4 shadow-lg',
      header:
        'pl-4 pt-3 font-medium tracking-wider mb-1 text-white truncate capitalize',
      description: 'px-4 text-xs text-gray-10',
      stats:
        'flex flex-col justify-center pl-4 border-l border-solid border-gray-100 text-gray-30 px-4',
      stat: 'monospace text-xs'
    },
    buttons: {
      base: 'grid grid-cols-2 gap-2px text-xs font-bold uppercase',
      icon: 'h-3 w-3 mr-1',
      btn:
        'tracking-wide flex justify-center items-center uppercase font-bold p-1 bg-gray-60 bg-gray-50 hover:bg-gray-50 hover:text-white border-2 border-transparent focus:outline-none focus:border-gray-10 transition duration-200',
      left: 'rounded rounded-t-none rounded-r-none',
      center: '',
      right: 'bg-blue-60 rounded rounded-t-none rounded-l-none hover:bg-blue-50'
    }
  }

  const topics = repoData.repositoryTopics.edges.map(
    (e: any) => e.node.topic.name
  )

  const commitCount = repoData.defaultBranchRef.target.history.totalCount
  const lastCommit = moment(repoData.pushedAt).fromNow()
  const repoLink = repoData.url
  const demoLink = repoData.homepageUrl

  return (
    <div className={classes.wrap}>
      <div className={classes.base}>
        <div className={classes.head}>
          <div className={classes.lastCommit}>Last Commit: {lastCommit}</div>
          <div className={classes.tags}>
            {topics &&
              topics.map((t: string) => (
                <button className={classes.tag.base}>
                  <div className={classes.tag.name}>
                    {t.split('-').join(' ')}
                  </div>
                </button>
              ))}
            <button
              className={
                classes.tag.base + ' bg-teal-70 text-teal-20 hover:bg-teal-60'
              }
            >
              <Icon kind='react' className={classes.tag.icon.react} />
              <div className={classes.tag.name}>React</div>
            </button>
            <button
              className={
                classes.tag.base + ' bg-red-80 text-red-20 hover:bg-red-70'
              }
            >
              <Icon kind='ruby' className={classes.tag.icon.ruby} />
              <div className={classes.tag.name}>Ruby on Rails</div>
            </button>
          </div>
        </div>
        <div className='flex items-baseline'>
          <h3 className={classes.info.header}>
            {repoData.name.split('-').join(' ')}
          </h3>
          <div className='text-gray-40 text-xs px-1'>{commitCount} Commits</div>
        </div>
        <div className={classes.info.base}>
          <div className={classes.info.description}>
            {repoData.description ? repoData.description : 'No description'}
          </div>
        </div>
      </div>
      <div className={classes.buttons.base}>
        <a
          className={classes.buttons.btn + ' ' + classes.buttons.left}
          href={repoLink}
          target='_blank'
          rel='noopener noreferrer'
        >
          <Code className={classes.buttons.icon} /> GITHUB
        </a>
        <a
          className={classes.buttons.btn + ' ' + classes.buttons.right}
          href={demoLink}
          target='_blank'
          rel='noopener noreferrer'
        >
          <Link className={classes.buttons.icon} /> DEMO
        </a>
      </div>
    </div>
  )
}

export default Card
