import * as React from 'react';

import Page from '../page';
import Photo from '../../components/photo';
import Slider from '../../components/slider';

class CityPage extends React.PureComponent {
  render() {
    return (
      <Page>
        <Slider theme='night'>
          <Photo src={require('../../photos/city/000000000002.jpg')} />
          <Photo src={require('../../photos/city/000000000003.jpg')} />
          <Photo src={require('../../photos/city/000000000004.jpg')} />
        </Slider>
      </Page>
    );
  }
}

export default CityPage;
