import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import HomePage from './pages/home-page';
import CityPage from './pages/city-page';
import PeoplePage from './pages/people-page';
import ErrorPage from './pages/error-page';

import Navigation from './components/navigation';

import styles from './common.css';

const paths = {
  home: '/',
  city: '/city',
  people: '/people',
  studio: '/studio',
  edition: '/edition',
  abstract: '/abstract',
}

const routes = [
  {
    path: paths.home,
    component: HomePage,
    exact: true,
  },
  {
    path: paths.city,
    component: CityPage
  },
  {
    path: paths.people,
    component: PeoplePage,
  },
  {
    component: ErrorPage,
  }
];

ReactDOM.render(
  <Router basename='/gegege'>
    <div className={styles.layout}>
      <Navigation
        routes={[
          {
            to: paths.city,
            text: 'город',
          },
          {
            to: paths.people,
            text: 'человек',
          },
          {
            to: paths.studio,
            text: 'студия',
          },
          {
            to: paths.edition,
            text: 'издание',
          },
          {
            to: paths.abstract,
            text: 'абстракция',
          },
        ]}
      />
      <main>
        <Switch>
          {routes.map((route, i) => (
            <Route key={i} {...route} />
          ))}
        </Switch>
      </main>
    </div>
  </Router>,
  document.getElementById('app')
);
