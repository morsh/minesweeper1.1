import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import * as H from 'history';
import { NavigationDrawer } from 'react-md';
import NavLink from './components/NavLink';

import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import Minesweeper from './pages/Minesweeper';

const DEFAULT_TITLE = 'Welcome';
const navItems: INavSettings[] = [
  {
    exact: true,
    label: 'Home',
    to: '/',
    icon: 'home',
    component: Home
  },
  {
    label: 'Minesweeper',
    to: '/minesweeper',
    icon: 'flag',
    component: Minesweeper
  }
];

class App extends React.Component {
  getLocationTitle(location: H.Location): string {
    const currentPage = navItems.find(item => item.to === location.pathname);
    return (currentPage && currentPage.label) || DEFAULT_TITLE;
  }

  render() {
    return (
      <Router>
        <Route
          render={({ location }) => (
            <NavigationDrawer
              drawerTitle="Site Navigation"
              toolbarTitle={this.getLocationTitle(location)}
              navItems={navItems.map(props => (
                <NavLink {...props} key={props.to} />
              ))}
            >
              <Switch key={location.key}>
                {navItems.map(props => (
                  <Route
                    key={props.to}
                    exact={props.exact}
                    path={props.to}
                    location={location}
                    component={props.component}
                  />
                ))}
              </Switch>
            </NavigationDrawer>
          )}
        />
      </Router>
    );
  }
}

export default App;
