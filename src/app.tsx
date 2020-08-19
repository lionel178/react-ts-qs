import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Loadable from 'react-loadable'

const Loading = () => {
  return <div>1</div>
}

const Page1 = Loadable({
  loader: () => import(/* webpackChunkName: "pages1" */ './pages/pages1'),
  loading: Loading,
})

const Page2 = Loadable({
  loader: () => import(/* webpackChunkName: "pages2" */ './pages/pages2'),
  loading: Loading,
})

const AppRouter = () => (
  <Router>
    <Route path="/" exact component={Page1} />
    <Route path="/page1" exact component={Page1} />
    <Route path="/page2" exact component={Page2} />
  </Router>
)

export default AppRouter
