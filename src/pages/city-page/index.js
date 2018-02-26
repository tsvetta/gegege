import * as React from 'react';
import styles from './styles.css';

import Page from '../page';
import Photo from '../../components/photo';

class CityPage extends React.PureComponent {
  render() {
    const { props } = this;

    return (
      <Page>
        <Photo src={require('../../photos/city/2018-02-26-16.19.09.jpg')} />
      </Page>
    );
  }
}

export default CityPage;
