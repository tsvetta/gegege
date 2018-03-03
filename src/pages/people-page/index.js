import * as React from 'react';

import Page from '../page';
import Photo from '../../components/photo';

class PeoplePage extends React.PureComponent {
  render() {
    return (
      <Page>
        <Photo src={require('../../photos/people/36386874514_0ee7078f59_o.jpg')} />
      </Page>
    );
  }
}

export default PeoplePage;
