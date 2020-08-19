import moment from 'moment'
import React, { FunctionComponent } from 'react'
import {
  ChatAlt,
  Clock,
  Code,
  Link,
  Terminal
} from '../../assets/heroicons/outline'
import Tag from './Tag'
import IconDetail from './IconDetail'

moment.updateLocale('en', {
  relativeTime: {
    future: 'in %s',
    past: '%s ago',
    s: '%ds',
    ss: '%ds',
    m: '%dm',
    mm: '%dm',
    h: '%dh',
    hh: '%dh',
    d: '%dd',
    dd: '%dd',
    M: '%dm',
    MM: '%dm',
    y: '%dy',
    yy: '%dy'
  }
})

interface CardPropTypes {
  repoData: any
  useImage: boolean
}

export const Card: FunctionComponent<CardPropTypes> = ({
  repoData,
  useImage
}) => {
  let classes = {
    wrap: 'shadow h-full flex flex-col',
    base:
      'bg-gray-90 rounded-lg rounded-b-none overflow-hidden flex-grow flex flex-col',
    head: 'flex flex-col justify-between text-gray-30 bg-gray-80',
    lastCommit: 'text-xs text-white pt-1',
    tags: 'flex flex-row flex-wrap p-4 pb-2',
    info: {
      base: 'pb-4',
      header: 'pl-4 pt-3 font-medium tracking-wider mb-1 text-white truncate ',
      description: 'px-4 text-xs text-gray-10 flex-grow',
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
      right:
        'bg-blue-60 rounded rounded-t-none rounded-l-none hover:bg-blue-50',
      only: 'rounded rounded-t-none col-span-2'
    }
  }

  const topics = repoData.repositoryTopics.edges.map(
    (e: any) => e.node.topic.name
  )

  const recentRef = repoData.refs.nodes
    .concat()
    .sort((a: any, b: any) =>
      a.target.pushedDate < b.target.pushedDate ? 1 : -1
    )[0]
  const commitCount = repoData.refs.nodes.reduce(
    (acc: number, curr: any) => acc + curr.target.history.totalCount,
    0
  )
  const branchCount = repoData.refs.nodes.length
  const lastCommitMsg = recentRef.target.messageHeadline
  const lastCommitTime = moment(recentRef.target.pushedDate).fromNow()
  const lastCommitBranch = recentRef.name
  const repoLink = repoData.url
  const demoLink = repoData.homepageUrl
  const repoName = repoData.name.includes('frontend')
    ? repoData.name
        .replace('frontend', '(frontend)')
        .split('-')
        .join(' ')
    : repoData.name.split('-').join(' ')

  return (
    <div className={classes.wrap}>
      <div className={classes.base}>
        <div className={classes.head}>
          <div className={classes.tags}>
            {topics &&
              topics
                .sort()
                .map((t: string) => (
                  <Tag key={t} name={t.split('-').join(' ')} />
                ))}
          </div>
        </div>
        {repoData.usesCustomOpenGraphImage && useImage && (
          <div className='relative pb-2/5'>
            <img
              src={repoData.openGraphImageUrl}
              alt={repoName + ' image'}
              className='absolute object-cover w-full h-full'
            />
          </div>
        )}
        <div className='flex flex-col flex-grow'>
          <h3 className={classes.info.header}>
            <a
              href={repoLink}
              target='_blank'
              rel='noopener noreferrer'
              className='transition duration-200 text-gray-20 hover:text-gray-10'
            >
              {repoName}
            </a>
          </h3>
          <div className='flex-grow px-4 text-sm text-gray-30'>
            {repoData.description ? repoData.description : 'No description'}
          </div>
          <div className='w-6 my-3 ml-4 border border-l-0 border-r-0 rounded border-gray-70' />
          <div className='px-4 pb-3'>
            <IconDetail
              icon={<ChatAlt />}
              size='xs'
              text={<div className='w-full truncate'>{lastCommitMsg}</div>}
            />
            <IconDetail
              icon={<Clock />}
              size='xs'
              text={
                <div>
                  {lastCommitTime} <span className='text-gray-50'>on</span>{' '}
                  {lastCommitBranch}
                  {lastCommitTime.match(/[ms]/) && (
                    <>
                      <span role='img' aria-label='sparkles emoji'>
                        {' '}
                        ✨️
                      </span>
                    </>
                  )}
                </div>
              }
            />
            <IconDetail
              icon={<Terminal />}
              size='xs'
              text={
                <div>
                  {commitCount} commits <span className='text-gray-50'>on</span>{' '}
                  {branchCount} {branchCount > 1 ? 'branches' : 'branch'}
                </div>
              }
            />
          </div>
        </div>
      </div>
      <div className={classes.buttons.base}>
        {demoLink ? (
          <>
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
              <Link className={classes.buttons.icon} /> LIVE SITE
            </a>
          </>
        ) : (
          <a
            className={classes.buttons.btn + ' ' + classes.buttons.only}
            href={repoLink}
            target='_blank'
            rel='noopener noreferrer'
          >
            <Code className={classes.buttons.icon} /> GITHUB
          </a>
        )}
      </div>
    </div>
  )
}

export default Card
