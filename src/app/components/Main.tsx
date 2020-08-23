import React from 'react'
import RecentRepos from './RecentRepos'
import FeaturedRepos from './FeaturedRepos'
import About from './About'

interface MainPropTypes {}

export const Main: React.FC<MainPropTypes> = () => (
  <div className='max-w-xs pt-8 mx-auto md:max-w-sm lg:max-w-5xl'>
    <About />
    <FeaturedRepos />
    <RecentRepos />
  </div>
)

export default Main
