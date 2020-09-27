import { ApolloServer } from 'apollo-server-lambda'
import axios from 'axios'
import { AboutQuery, FeaturedReposQuery, RecentReposQuery } from './queries'
import typeDefs from './schema'

const API_URL = 'https://api.github.com/graphql'
const headers = {
  authorization: `Bearer ${process.env.GH_TOKEN}`
}

const postAPI = async (query: string) =>
  await axios.post(API_URL, { query }, { headers })

const transformRepoEdges = (edges: any[]) => {
  const repositories = [] as any[]

  edges
    .map((n: any) => n.node)
    .concat()
    .sort((a: any, b: any) => (a.pushedAt < b.pushedAt ? 1 : -1))
    .map((r: any) => {
      const {
        name,
        description,
        homepageUrl,
        pushedAt,
        url,
        openGraphImageUrl,
        usesCustomOpenGraphImage
      } = r

      const recentRef = r.refs.nodes
        .concat()
        .sort((a: any, b: any) =>
          a.target.pushedDate < b.target.pushedDate ? 1 : -1
        )[0]

      const commitCount = r.refs.nodes.reduce(
        (acc: number, curr: any) => acc + curr.target.history.totalCount,
        0
      )

      const branchCount = r.refs.nodes.length

      const latestCommit = {
        message: recentRef.target.messageHeadline,
        pushedAt: recentRef.target.pushedDate,
        branch: recentRef.name
      }

      const topics = r.repositoryTopics.edges.map((e: any) => e.node.topic.name)

      return {
        name,
        description,
        homepageUrl,
        pushedAt,
        url,
        openGraphImageUrl,
        usesCustomOpenGraphImage,
        commitCount,
        branchCount,
        latestCommit,
        topics
      }
    })
    .forEach((r: any) => repositories.push(r))

  return repositories
}

const resolvers = {
  Query: {
    getAbout: async () => (await postAPI(AboutQuery)).data.data.viewer,
    getFeaturedRepos: async () =>
      transformRepoEdges(
        (await postAPI(FeaturedReposQuery)).data.data.viewer.pinnedItems.edges
      ),
    getRecentRepos: async () =>
      transformRepoEdges(
        (await postAPI(RecentReposQuery)).data.data.viewer.repositories.edges
      )
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

export const handler = server.createHandler()
