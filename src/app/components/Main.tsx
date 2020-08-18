import React, { FunctionComponent } from 'react'
import RecentRepos from './RecentRepos'

interface MainPropTypes {}

export const Main: FunctionComponent<MainPropTypes> = () => (
  <>
    <div className='max-w-xs mx-auto lg:max-w-5xl'>
      <RecentRepos />
    </div>
  </>
)

export default Main
