import React, { FunctionComponent } from 'react'
import moment from 'moment'
import { Code, InformationCircle, Link } from '../../assets/heroicons/solid'
import Icon from '../../assets/icons'
import Tag from './Tag'

interface CardPropTypes {
  repoData: any
}

export const Card: FunctionComponent<CardPropTypes> = ({ repoData }) => {
  let classes = {
    wrap: 'shadow',
    base: 'bg-gray-90 rounded-lg rounded-b-none overflow-hidden',
    head: 'flex flex-col justify-between text-gray-30 bg-gray-80 p-4 pt-3 pb-1',
    lastCommit: 'text-xs text-white pt-1',
    tags: 'flex flex-row flex-wrap pt-2',
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
              topics
                .sort()
                .map((t: string) => <Tag name={t.split('-').join(' ')} />)}
          </div>
        </div>
        <div className='flex items-baseline'>
          <h3 className={classes.info.header}>
            {repoData.name.split('-').join(' ')}
          </h3>
          <div className='px-1 text-xs text-gray-40'>{commitCount} Commits</div>
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
