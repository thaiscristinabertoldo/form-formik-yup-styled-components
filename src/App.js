import React, { Suspense } from 'react'

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Cadastro from './pages/Cadastro'

import { Loading } from './components/Loading'

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Switch>
          <Route path="/cadastro" component={Cadastro} />
          <Redirect to="/cadastro" />
        </Switch>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
