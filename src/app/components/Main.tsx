import React, { FunctionComponent } from 'react'
import RecentRepos from './RecentRepos'
import FeaturedRepos from './FeaturedRepos'

interface MainPropTypes {}

export const Main: FunctionComponent<MainPropTypes> = () => (
  <>
    <div className='max-w-xs mx-auto lg:max-w-5xl'>
      <FeaturedRepos />
      <RecentRepos />
    </div>
  </>
)

export default Main
