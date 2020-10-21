import React from 'react'
import { gql, useQuery } from '@apollo/client'
import moment from 'moment'
import Card from './Card'
import Loading from './Loading'

const GET_RECENT_REPOS = gql`
  query GetRecentRepos {
    getRecentRepos {
      name
      description
      homepageUrl
      pushedAt
      url
      openGraphImageUrl
      usesCustomOpenGraphImage
      branchCount
      commitCount
      latestCommit {
        message
        pushedAt
        branch
      }
      topics
    }
  }
`

interface RecentReposProps {}

export const RecentRepos: React.FC<RecentReposProps> = () => {
  const { loading, error, data } = useQuery(GET_RECENT_REPOS)

  const recentRepos = data?.getRecentRepos
  const lastCommitTime = data && moment(recentRepos[0].pushedAt).fromNow()

  return (
    <>
      <div className='mt-8'>
        <h2 className='flex flex-col items-baseline py-2 text-xl font-bold md:flex-row'>
          Recent Activity{' '}
          {data && (
            <div className='text-sm font-normal text-gray-30 md:ml-2'>
              (last commit {lastCommitTime}){' '}
              {lastCommitTime.match(/[ms]/) && (
                <>
                  <span role='img' aria-label='sparkles emoji'>
                    {' '}
                    ✨️
                  </span>
                </>
              )}
            </div>
          )}
        </h2>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
          <Loading loading={loading} source='GitHub' />
          <Loading loading={loading} source='GitHub' />
          <Loading loading={loading} source='GitHub' />
          {error && `Error! ${error.message}`}
          {data &&
            recentRepos.map((r: any) => (
              <Card key={r.name} repoData={r} useImage={false} />
            ))}
        </div>
      </div>
    </>
  )
}

export default RecentRepos
