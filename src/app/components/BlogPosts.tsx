import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Tag from './Tag'

interface BlogPostsProps {}

export const BlogPosts: React.FC<BlogPostsProps> = () => {
  const [state, setState] = useState<any[]>([])
  const DEVTO_API_URL = 'https://dev.to/api/'

  useEffect(() => {
    fetch(DEVTO_API_URL + 'articles?username=imjoshellis', {})
      .then(res => res.json())
      .then((json: any[]) => setState(json))
  }, [])

  if (state.length > 0) {
    console.log(state)
  }

  return (
    <div className='py-4'>
      <h2 className='flex flex-col items-baseline py-2 text-xl font-bold md:gap-2 md:flex-row'>
        Blog Posts{' '}
        {state.length > 0 && (
          <div className='text-sm font-normal text-gray-30'>
            (last post {moment(state[0].published_at).fromNow()})
          </div>
        )}
      </h2>
      <div className='flex flex-col gap-4 md:grid md:grid-cols-2'>
        {state.length === 0
          ? 'Loading posts from DEV.to'
          : state.map(p => (
              <div className='flex flex-col gap-2'>
                <div className='flex flex-col'>
                  <h3>
                    <a
                      className='text-xl font-bold duration-200 text-gray-30 transition-color hover:text-gray-10'
                      href={p.url}
                    >
                      {p.title}
                    </a>
                  </h3>
                  <p className='text-sm text-gray-50'>
                    <span>{moment(p.published_at).fromNow()}</span>
                    <span> • </span>
                    <span>
                      {p.public_reactions_count}{' '}
                      {p.public_reactions_count === 1
                        ? 'reaction'
                        : 'reactions'}
                    </span>
                    <span> • </span>
                    <span>
                      {p.comments_count}{' '}
                      {p.comments_count === 1 ? 'comment' : 'comments'}
                    </span>
                  </p>
                </div>
                <div className='flex gap-2'>
                  {p.tags.split(', ').map((t: string) => (
                    <Tag name={t} />
                  ))}
                </div>
                <p>
                  {p.description + ' '}
                  <a
                    href={p.url}
                    className='duration-200 text-gray-30 transition-color hover:text-gray-10 '
                  >
                    (read on Dev.to)
                  </a>
                </p>
              </div>
            ))}
      </div>
    </div>
  )
}

export default BlogPosts
