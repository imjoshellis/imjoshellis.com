import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { Newspaper, Mail } from '../../assets/heroicons/solid'
import 'mailgo/dist/mailgo.dark.min.js'

const GET_ABOUT = gql`
  query GetAbout {
    viewer {
      id
      name
      updatedAt
      bio
      avatarUrl
      location
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

export const About: React.FC<AboutProps> = () => {
  const { loading, error, data } = useQuery(GET_ABOUT)
  const my = data && data.viewer
  return (
    <div className=''>
      <div className='flex justify-between'>
        <h2 className='text-xl font-bold'>@imjoshellis</h2>
        <div className='flex gap-4 text-xs'>
          <a
            href='mailto:josh@imjoshellis.com'
            className='flex items-center justify-center p-1 px-2 font-bold tracking-wide uppercase transition duration-200 border-2 border-transparent rounded bg-blue-70 hover:bg-blue-60 hover:text-white focus:outline-none focus:border-blue-10'
          >
            <Mail className='w-4 h-4 mr-1' />
            josh@imjoshellis.com
          </a>
          {/*<button className='flex items-center justify-center p-1 px-2 font-bold tracking-wide uppercase transition duration-200 border-2 border-transparent rounded bg-gray-70 hover:bg-gray-50 hover:text-white focus:outline-none focus:border-gray-10'>
            <DocumentText className='w-4 h-4 mr-1' />
            resume
  </button>*/}
        </div>
      </div>
      {loading && 'Loading data from GitHub...'}
      {error && `Error! ${error.message}`}
      {data && (
        <div className='flex flex-col items-center py-4 lg:gap-8 lg:grid lg:grid-cols-3'>
          <div className='flex flex-col items-center h-full overflow-hidden text-sm rounded-md bg-gray-90'>
            <img
              src={my.avatarUrl}
              className='w-40 mt-8 border-4 border-gray-100 rounded-full'
              alt='My Avatar'
            />
            <div className='p-4 text-lg font-semibold'>Josh Ellis</div>
            <div className='flex flex-col flex-grow gap-1 px-4'>
              <div className='flex text-gray-30'></div>
              {my.status && (
                <div className='flex text-gray-30'>
                  <span
                    role='img'
                    aria-label='Graduate Emoji'
                    className='mr-1'
                    dangerouslySetInnerHTML={{ __html: my.status.emojiHTML }}
                  />
                  <div>
                    <span className='inline ml-1'>I'm currently</span>
                    <span className='inline ml-1'>{my.status.message}</span>.
                  </div>
                </div>
              )}
              {my.location && (
                <div className='flex text-gray-30'>
                  <span role='img' aria-label='Graduate Emoji' className='mr-1'>
                    🗺️
                  </span>
                  <span className='ml-1'>{my.location}</span>
                </div>
              )}
              {my.company && (
                <div className='flex text-gray-30'>
                  <span role='img' aria-label='Graduate Emoji' className='mr-1'>
                    🏢️
                  </span>
                  <span className='ml-1'>{my.company}</span>
                </div>
              )}{' '}
              <div className='flex text-gray-30'>
                <span role='img' aria-label='Graduate Emoji' className='mr-1'>
                  👨🏻‍🎓
                </span>
                <span className='ml-1'>Flatiron School 9/2020</span>
              </div>
            </div>
            <div className='grid w-full grid-cols-3 text-xs font-bold uppercase gap-2px'>
              <a
                href='https://github.com/imjoshellis'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center justify-center p-1 font-bold tracking-wide uppercase transition duration-200 border-2 border-transparent bg-gray-70 hover:bg-gray-60 hover:text-white focus:outline-none focus:border-gray-10'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-3 h-3 fill-current'
                  viewBox='0 0 20 20'
                >
                  <path d='M13.18 11.309c-.718 0-1.3.807-1.3 1.799 0 .994.582 1.801 1.3 1.801s1.3-.807 1.3-1.801c-.001-.992-.582-1.799-1.3-1.799zm4.526-4.683c.149-.365.155-2.439-.635-4.426 0 0-1.811.199-4.551 2.08-.575-.16-1.548-.238-2.519-.238-.973 0-1.945.078-2.52.238C4.74 2.399 2.929 2.2 2.929 2.2c-.789 1.987-.781 4.061-.634 4.426C1.367 7.634.8 8.845.8 10.497c0 7.186 5.963 7.301 7.467 7.301l1.734.002 1.732-.002c1.506 0 7.467-.115 7.467-7.301 0-1.652-.566-2.863-1.494-3.871zm-7.678 10.289h-.056c-3.771 0-6.709-.449-6.709-4.115 0-.879.31-1.693 1.047-2.369C5.537 9.304 7.615 9.9 9.972 9.9h.056c2.357 0 4.436-.596 5.664.531.735.676 1.045 1.49 1.045 2.369 0 3.666-2.937 4.115-6.709 4.115zm-3.207-5.606c-.718 0-1.3.807-1.3 1.799 0 .994.582 1.801 1.3 1.801.719 0 1.301-.807 1.301-1.801 0-.992-.582-1.799-1.301-1.799z' />
                </svg>
                <span className='ml-1'>GitHub</span>
              </a>
              <a
                href='https://linkedin.com/in/imjoshellis'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center justify-center p-1 font-bold tracking-wide uppercase transition duration-200 border-2 border-transparent bg-gray-70 hover:bg-gray-60 hover:text-white focus:outline-none focus:border-gray-10'
              >
                <svg
                  className='w-3 h-3 fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                >
                  <path d='M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zM7.65 13.979H5.706V7.723H7.65v6.256zm-.984-7.024c-.614 0-1.011-.435-1.011-.973 0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973zm8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355-.537 0-.856.371-.997.728-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01 1.279 0 2.238.857 2.238 2.699v3.699z' />
                </svg>
                <span className='ml-1'>LinkedIn</span>
              </a>
              <a
                href='https://dev.to/imjoshellis'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center justify-center p-1 font-bold tracking-wide uppercase transition duration-200 border-2 border-transparent bg-gray-70 hover:bg-gray-60 hover:text-white focus:outline-none focus:border-gray-10'
              >
                <Newspaper className='w-3 h-3' />
                <span className='ml-1'>Blog</span>
              </a>
            </div>
          </div>
          <div className='flex flex-col h-full col-span-2 gap-4 p-4 mt-4 rounded-md bg-gray-90 lg:mt-0'>
            <div className='text-2xl'>
              <span role='img' aria-label='waving hand emoji'>
                👋️
              </span>
              <span className='ml-2'>{my.bio}</span>
            </div>
            <div className='flex flex-col gap-4'>
              <p>
                From 2011 to 2020, I designed and built WordPress, Shopify, and
                SquareSpace websites and created marketing graphics for a wide
                variety of businesses and clients.
              </p>
              <p>
                In 2019, I started looking to get more into "real" development
                and taught myself the basics of React to build a simple PWA (BG
                Quickstart) to scratch my own itch.
              </p>
              <p>
                I enjoyed the process more than I thought I would, so I
                immediately started planning more ideas while consuming as much
                free learning material as possible.
              </p>
              <p>
                In early 2020, I decided to pursue development as a career, and
                I chose to enroll in Flatiron School's self-paced online program
                because I wanted to make sure I learned all the important
                concepts of Full Stack development in a structured way.
              </p>
              <p className='text-lg font-bold'>
                If you're looking for a React developer who's a self-starter,
                eager to grow, and excited to learn, let's chat!
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default About
