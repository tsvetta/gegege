import * as React from 'react';

import Page from '../page';
import Photo from '../../components/photo';
import Slider from '../../components/slider';

class PeoplePage extends React.PureComponent {
  render() {
    return (
      <Page>
        <Slider>
          <Photo src={require('../../photos/people/000000000001.jpg')} />
          <Photo src={require('../../photos/people/000000000002.jpg')} />
          <Photo src={require('../../photos/people/000000000003.jpg')} />
        </Slider>
      </Page>
    );
  }
}

export default PeoplePage;
