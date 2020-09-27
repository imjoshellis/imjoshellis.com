import { DocumentNode } from 'graphql'
import { ApolloServer } from 'apollo-server-lambda'
import axios from 'axios'
import { AboutQuery, FeaturedReposQuery, RecentReposQuery } from './queries'
import typeDefs from './schema'

const API_URL = 'https://api.github.com/grapql'
const headers = {
  authorization: `Bearer ${process.env.GH_TOKEN}`
}

const postAPI = (query: DocumentNode) =>
  axios.post(API_URL, { query }, { headers })

const resolvers = {
  Query: {
    getAbout: async () => {
      const res = await postAPI(AboutQuery)
      console.log(res)
      return res
    }
    // getFeaturedRepos: async () => await postAPI(FeaturedReposQuery),
    // getRecentRepos: async () => await postAPI(RecentReposQuery)
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

export const handler = server.createHandler()
