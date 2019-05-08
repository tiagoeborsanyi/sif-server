import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';

import './App.css';
import Layout from './hoc/Layout/Layout';
import CadastroVt from './containers/vt/cadastro/Cadastrarvt';
import Dashboard from './containers/dashboard/Dashboard';
import VisualizaVt from './containers/vt/Visualiza/VisualizaVt';
import Auth from './containers/auth/Auth';
import EditFita from './containers/vt/historico/fita/EditFita';
import EditHd from './containers/vt/historico/hd/EditHd';
import Login from './containers/auth/login/Login';
import Perfil from './containers/auth/perfil/Perfil';
import EditSenha from './containers/auth/editSenha/EditSenha';
import Logout from './containers/auth/logout/Logout';

class App extends Component {

  componentDidMount () {
    this.props.onTryOutSignup();
    this.props.setErrorFinish();
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/" component={Login} />
        <Redirect to="/" />
      </Switch>
    );

    if (this.props.isAuth) {
      routes = (
        <Switch>
            <Route path="/cadastro-vt" component={CadastroVt} />
            <Route path="/cadastro-user" component={Auth} />
            <Route path="/visualiza-vt" component={VisualizaVt} />
            <Route path="/edita-fita" component={EditFita}    />
            <Route path="/edita-hd" component={EditHd}    />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/perfil" component={Perfil} />
            <Route path="/edita-senha" component={EditSenha} />
            <Route path="/logout" component={Logout} />
            <Redirect to="/dashboard" />
          </Switch>
      );
    }

    return (
      <div className="App">
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryOutSignup: () => dispatch(actions.authCheckState()),
    setErrorFinish: () => dispatch(actions.setErrorFinish())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
