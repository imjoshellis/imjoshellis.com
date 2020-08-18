import React, { FunctionComponent } from 'react'
import { gql, useQuery } from '@apollo/client'

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
              className='w-64 rounded-full'
              alt='My Avatar'
            />
          </div>
          <div className='ml-4 text-xl'>
            <span>{my.bio}</span>
            <span className='ml-1'>I am</span>
            {!my.isHireable && <span className='ml-1'>not</span>}
            <span className='ml-1'>actively seeking opportunities.</span>
            {my.status && (
              <>
                <span className='ml-1'>According to my GitHub status,</span>
                <span className='ml-1'>I'm currently</span>
                <span className='ml-1'>{my.status.message}</span>.
                <span
                  className='inline-block ml-1'
                  dangerouslySetInnerHTML={{ __html: my.status.emojiHTML }}
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default About
