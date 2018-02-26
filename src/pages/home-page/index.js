import * as React from 'react';
import styles from './styles.css';

import Page from '../page';

class HomePage extends React.PureComponent {
  render() {
    const { props } = this;

    return (
      <Page>
        Главная страница
      </Page>
    );
  }
}

export default HomePage;
