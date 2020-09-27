import gql from 'graphql-tag'

export default gql`
  type UserStatus {
    emojiHTML: String
    message: String
  }

  type About {
    id: String
    name: String
    bio: String
    avatarUrl: String
    location: String
    url: String
    status: UserStatus
    company: String
    isHireable: Boolean
  }

  type Commit {
    branch: String
    message: String
    pushedAt: String
  }

  type Repository {
    name: String
    description: String
    homepageUrl: String
    pushedAt: String
    url: String
    openGraphImageUrl: String
    usesCustomOpenGraphImage: Boolean
    commitCount: Int
    branchCount: Int
    latestCommit: Commit
    topics: [String]
  }

  type Query {
    getAbout: About
    getFeaturedRepos: [Repository]
    getRecentRepos: [Repository]
  }
`
