import React from 'react'
import { BarLoader } from 'react-spinners'

interface LoadingProps {
  loading: boolean
  source: string
}

export const Loading: React.FC<LoadingProps> = ({ loading, source }) => {
  return (
    <>
      {loading ? (
        <div className='flex flex-col items-center justify-center flex-grow h-64'>
          <BarLoader color={'#777777'} />
          <div className='mt-4'>'Loading data from {source}...'</div>
        </div>
      ) : null}
    </>
  )
}

export default Loading
