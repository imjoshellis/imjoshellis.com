import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import moment from 'moment'
import React from 'react'
import Main from './components/Main'

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
  uri: '/.netlify/functions/github-graphql',
  cache: new InMemoryCache()
})

function App () {
  return (
    <ApolloProvider client={client}>
      <Main />
    </ApolloProvider>
  )
}

export default App
