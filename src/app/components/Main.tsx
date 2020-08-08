import React, { FunctionComponent } from 'react'
import Card from './Card'

interface MainPropTypes {}

export const Main: FunctionComponent<MainPropTypes> = () => {
  let classes = {
    base: ''
  }
  return (
    <div className='max-w-sm mx-auto'>
      <Card />
    </div>
  )
}

export default Main
