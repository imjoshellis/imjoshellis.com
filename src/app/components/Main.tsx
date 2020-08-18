import { gql, useQuery } from '@apollo/client'
import React, { FunctionComponent } from 'react'
import Card from './Card'
import moment from 'moment'

interface MainPropTypes {}

export const Main: FunctionComponent<MainPropTypes> = () => {
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

  let classes = {
    base: ''
  }

  const { loading, error, data } = useQuery(GET_RECENT_REPOS)

  data && console.log(data.viewer.repositories.edges)

  return (
    <>
      <div className='max-w-xs mx-auto lg:max-w-5xl'>
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
        <div className='mt-8'>
          <h2 className='flex items-baseline py-2 text-xl font-bold'>
            What I'm Working On{' '}
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
          <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
            {loading && 'Loading...'}
            {error && `Error! ${error.message}`}
            {data &&
              data.viewer.repositories.edges
                .map((r: any) => <Card key={r.node.name} repoData={r.node} />)
                .reverse()}
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
