import React from 'react'
import RecentRepos from './RecentRepos'
import FeaturedRepos from './FeaturedRepos'
import About from './About'
import BlogPosts from './BlogPosts'
import Header from './Header'

interface MainPropTypes {}

export const Main: React.FC<MainPropTypes> = () => (
  <div className='max-w-xs py-8 mx-auto md:max-w-sm lg:max-w-5xl'>
    <Header />
    <About />
    <FeaturedRepos />
    <RecentRepos />
    <BlogPosts />
  </div>
)

export default Main
