import { gql, useQuery } from '@apollo/client'
import 'mailgo/dist/mailgo.dark.min.js'
import Loading from './Loading'
import React, { useState } from 'react'
import { Newspaper, ChevronDown, ChevronUp } from '../../assets/heroicons/solid'
import Tag from './Tag'
import { motion, AnimatePresence } from 'framer-motion'

const GET_ABOUT = gql`
  query GetAbout {
    getAbout {
      id
      name
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
  const [readMore, setReadMore] = useState(false)
  const my = data && data.getAbout

  const techTags = [
    'JavaScript',
    'TypeScript',
    'Svelte',
    'React',
    'Redux',
    'GraphQL',
    'Ruby on Rails',
    'PWA',
    'Express',
    'Nodejs',
    'SQL',
    'Adobe CC'
  ]

  return (
    <div className=''>
      <Loading loading={loading} source='GitHub' />
      {error && `Error! ${error.message}`}
      {data && (
        <div className='flex flex-col items-center py-4 lg:gap-8 lg:grid lg:grid-cols-3'>
          <div className='flex flex-col items-center h-full gap-4 overflow-hidden text-sm rounded-md bg-gray-90'>
            <div className='flex flex-wrap justify-center p-4 pb-16 bg-gray-80'>
              {techTags.map((t, idx) => (
                <Tag name={t} key={idx} />
              ))}
            </div>
            <img
              src={my.avatarUrl}
              className='w-24 -mt-16 rounded-full shadow-xl'
              alt='My Avatar'
            />
            <h2 className='text-xl font-bold'>Josh Ellis</h2>
            <div className='flex flex-col flex-grow px-2 mt-4'>
              {my.status && (
                <div className='flex text-gray-30'>
                  <span
                    role='img'
                    aria-label='Graduate Emoji'
                    dangerouslySetInnerHTML={{ __html: my.status.emojiHTML }}
                  />
                  <span className='inline ml-2'>{my.status.message}</span>.
                </div>
              )}
              {my.location && (
                <div className='flex text-gray-30'>
                  <span role='img' aria-label='Graduate Emoji'>
                    🗺️
                  </span>
                  <span className='ml-2'>{my.location}</span>
                </div>
              )}
              {my.company && (
                <div className='flex text-gray-30'>
                  <span role='img' aria-label='Graduate Emoji'>
                    🏢️
                  </span>
                  <span className='ml-2'>{my.company}</span>
                </div>
              )}{' '}
              <div className='flex text-gray-30'>
                <span role='img' aria-label='Graduate Emoji'>
                  👨🏻‍🎓
                </span>
                <span className='ml-2'>Flatiron School 9/2020</span>
              </div>
            </div>
            <div className='grid w-full grid-cols-3 mt-4 text-xs font-bold uppercase gap-2px'>
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
          <div className='flex flex-col h-full col-span-2 gap-4 mt-4 lg:mt-0'>
            <div className='flex flex-col gap-2'>
              <h2 className='text-xl font-bold'>Bio</h2>
              <div className='flex flex-col h-full gap-4 p-4 rounded-md bg-gray-90 lg:mt-0'>
                <div className='grid grid-flow-row gap-4'>
                  <p>
                    <span className=''>{my.bio}</span>
                  </p>
                  <p>
                    Innovative tech excites me, especially when it's related to
                    productivity, minimalism, mental health, tabletop games, or
                    travel. Though I focus on the front end of web development
                    using TypeScript/JavaScript frameworks like React, I'm
                    experienced building both Express/NodeJS and Ruby on Rails
                    on the back end.
                  </p>

                  <p>
                    My eight-year background in print, graphic, and web design
                    gave me an understanding of how to engage with visuals,
                    iterate on ideas, and create within specs. In 2019, I got my
                    first real taste of building an app because I decided to
                    build one for myself.
                  </p>

                  <AnimatePresence exitBeforeEnter initial={false}>
                    {readMore ? (
                      <>
                        <motion.div
                          key='show less'
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className='grid grid-flow-row gap-4'
                        >
                          <button
                            onClick={() => setReadMore(false)}
                            className='flex items-center text-sm text-left transition-colors duration-200 hover:text-white text-gray-40'
                          >
                            <ChevronUp className='w-3 h-3 fill-current' />
                            <span className='ml-1'>show less</span>
                          </button>
                          <h3>
                            <span
                              role='img'
                              aria-label='dice emoji'
                              className='mr-1'
                            >
                              🎲️{' '}
                            </span>
                            My First App
                          </h3>
                          <p>
                            I created my first real app,
                            [BGQuickstart.com](https://bgquickstart.com),
                            because I wanted a faster way to choose a start
                            player when playing board games with friends. After
                            teaching myself React, I realized I had fallen in
                            love with the feeling of solving problems with code
                            and immediately started planning my next app.
                          </p>
                          <p>
                            After some time, I decided to switch to a career in
                            software engineering and joined Flatiron School's to
                            accelerate the transition.
                          </p>
                          <h3>
                            <span
                              role='img'
                              aria-label='graduation cap emoji'
                              className='mr-1'
                            >
                              🎓️{' '}
                            </span>
                            Flatiron School
                          </h3>
                          <p>
                            At Flatiron, I learned Ruby, Ruby on Rails,
                            JavaScript, and React. It was exciting to learn how
                            to work with the back end side of things. Databases,
                            controllers, and routing were always confusing when
                            I tried to learn it on my own. But after learning
                            the basics at Flatiron, I've already gone on to
                            learn my way around Express, GraphQL, and NodeJS to
                            expand my backend repertoire.
                          </p>
                          <p>
                            I'm thrilled to continue expanding the skill-set I
                            developed as a student at Flatiron School.
                          </p>
                        </motion.div>
                      </>
                    ) : (
                      <motion.div
                        key='show more'
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.1 }}
                        className='grid grid-flow-row gap-4'
                      >
                        <button
                          onClick={() => setReadMore(true)}
                          className='flex items-center text-sm text-left transition-colors duration-200 hover:text-white text-gray-40'
                        >
                          <ChevronDown className='w-3 h-3 fill-current' />
                          <span className='ml-1'>show more</span>
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <p className='text-lg font-bold'>
                    Whether you're looking to hire an eager self-starter or
                    build your network, I'd love to hear your story.
                  </p>
                  <p>
                    <span role='img' aria-label='inbox emoji' className='mr-1'>
                      📥️{' '}
                    </span>
                    DMs are open on{' '}
                    <a
                      className='transition-colors duration-200 text-blue-50 hover:text-blue-40'
                      href='https://linkedin.com/in/imjoshellis'
                    >
                      LinkedIn
                    </a>
                    {' and '}
                    <a
                      className='transition-colors duration-200 text-blue-50 hover:text-blue-40'
                      href='https://twitter.com/imjoshells'
                    >
                      Twitter
                    </a>{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default About
