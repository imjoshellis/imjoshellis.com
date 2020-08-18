export const queryString = `
{
  viewer {
    name
    updatedAt
    bio
    avatarUrl
    url
    status {
      emojiHTML
      message
    }
    company
    isHireable
    pinnedItems (first: 2) {
      edges {
        node {
          ...on Repository {
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
    }
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
    repositories(orderBy: {field: PUSHED_AT, direction: ASC}, last: 9, privacy: PUBLIC) {
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

export default queryString
