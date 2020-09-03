import { gql, useQuery } from '@apollo/client'
import moment from 'moment'
import React from 'react'
import Card from './Card'
import Loading from './Loading'

const GET_FEATURED_REPOS = gql`
  query GetFeaturedRepos {
    viewer {
      id
      pinnedItems(first: 3) {
        edges {
          node {
            ... on Repository {
              name
              description
              homepageUrl
              pushedAt
              url
              openGraphImageUrl
              usesCustomOpenGraphImage
              refs(refPrefix: "refs/heads/", last: 3) {
                nodes {
                  name
                  target {
                    ... on Commit {
                      history {
                        totalCount
                      }
                      messageHeadline
                      pushedDate
                    }
                  }
                }
              }
              repositoryTopics(first: 100) {
                edges {
                  node {
                    topic {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

interface FeaturedReposProps {}

export const FeaturedRepos: React.FC<FeaturedReposProps> = () => {
  const { loading, error, data } = useQuery(GET_FEATURED_REPOS)

  const featuredRepoList = [] as any[]
  let lastCommitTime

  if (data) {
    data.viewer.pinnedItems.edges
      .map((n: any) => n.node)
      .concat()
      .sort((a: any, b: any) => (a.pushedAt < b.pushedAt ? 1 : -1))
      .forEach((r: any) => featuredRepoList.push(r))
  }

  lastCommitTime = data && moment(featuredRepoList[0].pushedAt).fromNow()

  return (
    <>
      <div>
        <h2 className='flex flex-col items-baseline py-2 text-xl font-bold md:gap-2 md:flex-row'>
          Featured Projects{' '}
          {data && (
            <div className='text-sm font-normal text-gray-30'>
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
    </>
  )
}

export default FeaturedRepos
