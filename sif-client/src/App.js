import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Layout from './hoc/Layout/Layout';
import CadastroVt from './containers/vt/cadastro/Cadastrarvt';
import Dashboard from './containers/dashboard/Dashboard';
import VisualizaVt from './containers/vt/Visualiza/VisualizaVt';
import Auth from './containers/auth/Auth';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/cadastro-vt" component={CadastroVt} />
            <Route path="/cadastro-user" component={Auth} />
            <Route path="/visualiza-vt" component={VisualizaVt} />
            <Route path="/" exact component={Dashboard} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
