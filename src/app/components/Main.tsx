import React, { FunctionComponent } from 'react'
import Card from './Card'

interface MainPropTypes {}

export const Main: FunctionComponent<MainPropTypes> = () => {
  let classes = {
    base: ''
  }
  return (
    <div className='max-w-xs mx-auto grid gap-8'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default Main
