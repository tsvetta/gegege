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
  <Router>
    <div className={styles.layout}>
      <Navigation
        routes={[
          {
            to: paths.city,
            text: 'Город',
          },
          {
            to: paths.people,
            text: 'Человек',
          },
          {
            to: paths.studio,
            text: 'Студия',
          },
          {
            to: paths.edition,
            text: 'Издание',
          },
          {
            to: paths.abstract,
            text: 'Абстракция',
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
