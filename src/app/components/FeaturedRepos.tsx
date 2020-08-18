import React, { FunctionComponent } from 'react'
import { gql, useQuery } from '@apollo/client'
import moment from 'moment'
import Card from './Card'

const GET_RECENT_REPOS = gql`
  query GetRecentRepos {
    viewer {
      repositories(
        orderBy: { field: PUSHED_AT, direction: ASC }
        last: 3
        privacy: PUBLIC
      ) {
        edges {
          node {
            ... on Repository {
              name
              description
              homepageUrl
              pushedAt
              url
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
              languages(first: 100) {
                edges {
                  node {
                    name
                    color
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
              pullRequests(first: 100) {
                totalCount
              }
            }
          }
        }
      }
    }
  }
`

interface FeaturedReposProps {}

export const FeaturedRepos: FunctionComponent<FeaturedReposProps> = () => {
  const { loading, error, data } = useQuery(GET_RECENT_REPOS)
  return (
    <>
      <div>
        <h2 className='flex items-baseline py-2 text-xl font-bold'>
          Featured Projects{' '}
          {data && (
            <div className='ml-2 text-sm font-normal text-gray-30'>
              (last commit{' '}
              {moment(
                data.viewer.repositories.edges.concat().reverse()[0].node
                  .pushedAt
              ).fromNow()}
              )
            </div>
          )}
        </h2>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
          {loading && 'Loading...'}
          {error && `Error! ${error.message}`}
          {data &&
            data.viewer.repositories.edges
              .slice(1, 3)
              .map((r: any) => (
                <Card
                  key={r.node.name}
                  img={'./assets/img.png'}
                  repoData={r.node}
                />
              ))
              .reverse()}
        </div>
      </div>
    </>
  )
}

export default FeaturedRepos
