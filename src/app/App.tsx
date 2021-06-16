import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import moment from 'moment'
import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import Main from './components/Main'
import ExternalRedirect from './components/ExternalRedirect'

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
    <Router>
      <Switch>
        <Route exact path='/'>
          <ApolloProvider client={client}>
            <Main />
          </ApolloProvider>
        </Route>
        <ExternalRedirect
          path='/bgg'
          url='https://boardgamegeek.com/collection/user/imjoshellis?own=1&subtype=boardgame&ff=1'
        />
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
