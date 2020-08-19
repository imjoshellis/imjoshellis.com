import React, { FunctionComponent } from 'react'
import { gql, useQuery } from '@apollo/client'
import IconDetail from './IconDetail'
import { Newspaper, AcademicCap } from '../../assets/heroicons/outline'

const GET_ABOUT = gql`
  query GetAbout {
    viewer {
      id
      name
      updatedAt
      bio
      avatarUrl
      url
      status {
        emojiHTML
        message
      }
      company
      isHireable
    }
  }
`

interface AboutProps {}

export const About: FunctionComponent<AboutProps> = () => {
  const { loading, error, data } = useQuery(GET_ABOUT)
  const my = data && data.viewer
  return (
    <div>
      <h2 className='py-2 text-xl font-bold'>About Josh Ellis</h2>
      {loading && 'Loading data from GitHub...'}
      {error && `Error! ${error.message}`}
      {data && (
        <div className='flex items-center'>
          <div className=''>
            <img
              src={my.avatarUrl}
              className='w-40 rounded-full'
              alt='My Avatar'
            />
          </div>
          <div className='flex flex-col ml-4 text-xl'>
            <div>
              <span>{my.bio}</span>
            </div>
            <div className='flex flex-col text-base'>
              <div className='flex text-gray-30'>
                {!my.isHireable ? (
                  <>
                    <span role='img' aria-label='zzz emoji' className='mr-1'>
                      💤️
                    </span>
                    <span className='ml-1'>
                      Not actively looking for work, but let's connect anyway.
                    </span>
                  </>
                ) : (
                  <>
                    <span role='img' aria-label='eyes emoji' className='mr-1'>
                      👀
                    </span>
                    <span className='ml-1'>
                      Actively looking for a new opportunity as a frontend dev
                      for a productivity startup.
                    </span>
                  </>
                )}
              </div>
              {my.status && (
                <div className='flex text-gray-30'>
                  <span
                    role='img'
                    aria-label='Graduate Emoji'
                    className='mr-1'
                    dangerouslySetInnerHTML={{ __html: my.status.emojiHTML }}
                  />
                  <span className='ml-1'>I'm currently</span>
                  <span className='ml-1'>{my.status.message}</span>.
                </div>
              )}
              <div className='flex text-gray-30'>
                <span role='img' aria-label='Graduate Emoji' className='mr-1'>
                  👨🏻‍🎓
                </span>
                <span className='ml-1'>Flatiron School 8/2020</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default About
