import { gql, useQuery } from '@apollo/client'
import React, { FunctionComponent } from 'react'
import Card from './Card'

interface MainPropTypes {}

export const Main: FunctionComponent<MainPropTypes> = () => {
  const GET_RECENT_REPOS = gql`
    query GetRecentRepos {
      viewer {
        repositories(
          orderBy: { field: PUSHED_AT, direction: ASC }
          last: 5
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
                defaultBranchRef {
                  target {
                    ... on Commit {
                      history {
                        totalCount
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

  let classes = {
    base: ''
  }

  const { loading, error, data } = useQuery(GET_RECENT_REPOS)

  data && console.log(data.viewer.repositories.edges)

  return (
    <div className='max-w-xs mx-auto grid gap-8'>
      {loading && 'Loading...'}
      {error && `Error! ${error.message}`}
      {data &&
        data.viewer.repositories.edges.map((r: any) => (
          <Card key={r.node.name} repoData={r.node} />
        ))}
    </div>
  )
}

export default Main
