import { gql, useQuery } from '@apollo/client'
import moment from 'moment'
import React from 'react'
import Card from './Card'
import Loading from './Loading'

const GET_FEATURED_REPOS = gql`
  query GetFeaturedRepos {
    getFeaturedRepos {
      name
      description
      homepageUrl
      pushedAt
      url
      openGraphImageUrl
      usesCustomOpenGraphImage
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

interface FeaturedReposProps {}

export const FeaturedRepos: React.FC<FeaturedReposProps> = () => {
  const { loading, error, data } = useQuery(GET_FEATURED_REPOS)
  console.log(data)

  const featuredRepoList = [] as any[]
  // let lastCommitTime

  // lastCommitTime = data && moment(featuredRepoList[0].pushedAt).fromNow()

  return (
    <>
      {/*<div>
        <h2 className='flex flex-col items-baseline py-2 text-xl font-bold md:flex-row'>
          Featured Projects{' '}
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
            featuredRepoList.map((r: any) => (
              <Card key={r.name} repoData={r} useImage={true} />
            ))}
        </div>
      </div>
            */}
    </>
  )
}

export default FeaturedRepos
