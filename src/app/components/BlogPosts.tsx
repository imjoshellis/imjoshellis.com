import moment from 'moment'
import React, { useEffect, useState } from 'react'
import HeartIcon from '../../assets/heroicons/outline/Heart'
import Tag from './Tag'
import ChatIcon from '../../assets/heroicons/outline/Chat'
import { Loading } from './Loading'

interface BlogPostsProps {}

interface DevToArticle {
  type_of: string
  id: number
  title: string
  description: string
  cover_image: string
  readable_publish_date: string
  social_image: string
  tag_list: string[]
  tags: string
  slug: string
  path: string
  url: string
  canonical_url: string
  comments_count: number
  public_reactions_count: number
  collection_id: number
  created_at: string
  edited_at: string
  crossposted_at: string
  published_at: string
  last_comment_at: string
  published_timestamp: string
  user: {
    name: string
    username: string
    twitter_username: string
    github_username: string
    website_url: string
    profile_image: string
    profile_image_90: string
  }
  organization: {
    name: string
    username: string
    slug: string
    profile_image: string
    profile_image_90: string
  }
}

interface DevToArticles extends Array<DevToArticle> {}

export const BlogPosts: React.FC<BlogPostsProps> = () => {
  const [state, setState] = useState<DevToArticles | undefined>(undefined)
  const DEVTO_API_URL = 'https://dev.to/api/'

  useEffect(() => {
    fetch(DEVTO_API_URL + 'articles?username=imjoshellis', {})
      .then(res => res.json())
      .then((json: DevToArticles) => setState(json))
  }, [])

  return (
    <div className='py-4'>
      <h2 className='flex flex-col items-baseline py-2 text-xl font-bold md:flex-row'>
        Blog Posts{' '}
        {state !== undefined && (
          <div className='text-sm font-normal text-gray-30 md:ml-2'>
            (last post {moment(state[0].published_at).fromNow()})
          </div>
        )}
      </h2>
      <div className='flex flex-col gap-6 lg:grid lg:grid-cols-2'>
        {state === undefined ? (
          <Loading loading source='Dev.to' />
        ) : (
          state.slice(0, 6).map(p => (
            <div className='flex flex-col max-w-md gap-2 pb-2 text-gray-30'>
              <div className='flex flex-col'>
                <h3>
                  <a
                    className='text-xl font-bold duration-200 text-gray-10 transition-color hover:text-blue-40'
                    href={p.url}
                  >
                    {p.title}
                  </a>
                </h3>
                <p className='flex items-center text-sm text-gray-50'>
                  {moment(p.published_at, moment.ISO_8601).fromNow()}
                  <span className='px-1 opacity-50'> • </span>
                  {p.public_reactions_count}{' '}
                  <HeartIcon className='w-4 h-4 ml-1' />
                  <span className='px-1 opacity-50'> • </span>
                  {p.comments_count} <ChatIcon className='w-4 h-4 ml-1' />
                </p>
              </div>
              <div className='flex flex-wrap mt-2'>
                {p.tags.split(', ').map((t: string) => (
                  <Tag name={t} />
                ))}
              </div>
              <p>{p.description}</p>
              <a
                href={p.url}
                className='duration-200 text-gray-10 transition-color hover:text-blue-40 '
              >
                (read on Dev.to)
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default BlogPosts
