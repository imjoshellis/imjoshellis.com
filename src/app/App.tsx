import {
  ApolloClient,
  gql,
  InMemoryCache,
  ApolloProvider
} from '@apollo/client'
import React from 'react'
import Main from './components/Main'

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_GH_TOKEN}`
  },
  cache: new InMemoryCache()
})

client.query({
  query: gql`
    query {
      viewer {
        name
        updatedAt
        bio
        status {
          message
        }
        company
        isHireable
        pullRequests(last: 1) {
          edges {
            node {
              createdAt
              repository {
                name
              }
            }
          }
        }
        commitComments(last: 1) {
          edges {
            node {
              bodyText
            }
          }
        }
        repositories(
          orderBy: { field: PUSHED_AT, direction: ASC }
          last: 9
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
})

function App () {
  return (
    <ApolloProvider client={client}>
      <Main />
    </ApolloProvider>
  )
}

export default App
