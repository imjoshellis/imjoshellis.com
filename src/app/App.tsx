import {
  ApolloClient,
  gql,
  InMemoryCache,
  ApolloProvider
} from '@apollo/client'
import React from 'react'
import Main from './components/Main'
import queryString from './queryString'
import moment from 'moment'

moment.updateLocale('en', {
  relativeTime: {
    future: 'in %s',
    past: '%s ago',
    s: '%ds',
    ss: '%ds',
    m: '%dm',
    mm: '%dm',
    h: '%dh',
    hh: '%dh',
    d: '%dd',
    dd: '%dd',
    M: '%dmo',
    MM: '%dmo',
    y: '%dyr',
    yy: '%dyr'
  }
})

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
