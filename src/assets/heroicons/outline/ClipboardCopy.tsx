import * as React from 'react'

function ClipboardCopyIcon (props: any) {
  return (
    <svg fill='none' viewBox='0 0 24 24' stroke='currentColor' {...props}>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3'
      />
    </svg>
  )
}

export default ClipboardCopyIcon
