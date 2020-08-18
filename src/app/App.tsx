import {
  ApolloClient,
  gql,
  InMemoryCache,
  ApolloProvider
} from '@apollo/client'
import React from 'react'
import Main from './components/Main'
import queryString from './queryString'

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_GH_TOKEN}`
  },
  cache: new InMemoryCache()
})

client.query({
  query: gql`
    ${queryString}
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
