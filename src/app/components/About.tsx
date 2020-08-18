import React, { FunctionComponent } from 'react'
import { gql, useQuery } from '@apollo/client'

const GET_ABOUT = gql`
  query GetAbout {
    viewer {
      name
      bio
      status {
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
      {data && <div>{my.status.message}</div>}
    </div>
  )
}

export default About
