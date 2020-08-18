import { gql, useQuery } from '@apollo/client'
import React, { FunctionComponent } from 'react'
import Card from './Card'
import moment from 'moment'
import RecentRepos from './RecentRepos'

interface MainPropTypes {}

export const Main: FunctionComponent<MainPropTypes> = () => {
  let classes = {
    base: ''
  }

  return (
    <>
      <div className='max-w-xs mx-auto lg:max-w-5xl'>
        <RecentRepos />
      </div>
    </>
  )
}

export default Main
