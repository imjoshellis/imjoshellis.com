import React, { FunctionComponent } from 'react'
import { gql, useQuery } from '@apollo/client'
import moment from 'moment'
import Card from './Card'
import img from '../../assets/img.jpg'

const GET_FEATURED_REPOS = gql`
  query GetFeaturedRepos {
    viewer {
      justDoThree: repository(name: "just-do-three") {
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
      bgQuickstart: repository(name: "bgquickstart.com") {
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
`

interface FeaturedReposProps {}

export const FeaturedRepos: FunctionComponent<FeaturedReposProps> = () => {
  const { loading, error, data } = useQuery(GET_FEATURED_REPOS)

  const featuredRepoList = []

  if (data) {
    if (data.viewer.justDoThree.pushedAt > data.viewer.bgQuickstart.pushedAt) {
      featuredRepoList.push(data.viewer.justDoThree)
      featuredRepoList.push(data.viewer.bgQuickstart)
    } else {
      featuredRepoList.push(data.viewer.bgQuickstart)
      featuredRepoList.push(data.viewer.justDoThree)
    }
  }

  return (
    <>
      <div>
        <h2 className='flex items-baseline py-2 text-xl font-bold'>
          Featured Projects{' '}
          {data && (
            <div className='ml-2 text-sm font-normal text-gray-30'>
              (last commit {moment(featuredRepoList[0].pushedAt).fromNow()})
            </div>
          )}
        </h2>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
          {loading && 'Loading data from GitHub...'}
          {error && `Error! ${error.message}`}
          {data &&
            featuredRepoList.map((r: any) => (
              <Card key={r.name} img={img} repoData={r} />
            ))}
        </div>
      </div>
    </>
  )
}

export default FeaturedRepos
