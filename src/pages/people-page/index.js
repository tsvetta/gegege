import * as React from 'react';
import styles from './styles.css';

import Page from '../page';
import Photo from '../../components/photo';

class PeoplePage extends React.PureComponent {
  render() {
    const { props } = this;

    return (
      <Page>
        <Photo src={require('../../photos/people/36386874514_0ee7078f59_o.jpg')} />
      </Page>
    );
  }
}

export default PeoplePage;
