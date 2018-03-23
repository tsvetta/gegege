import * as React from 'react';

import Page from '../page';
import Photo from '../../components/photo';
import Slider from '../../components/slider';

class PeoplePage extends React.PureComponent {
  render() {
    return (
      <Page>
        <Slider>
          <Photo src={require('../../photos/people/00000000001.jpg')} />
          <Photo src={require('../../photos/people/00000000002.jpg')} />
          <Photo src={require('../../photos/people/00000000003.jpg')} />
          <Photo src={require('../../photos/people/00000000004.jpg')} />
          <Photo src={require('../../photos/people/00000000005.jpg')} />
          <Photo src={require('../../photos/people/00000000006.jpg')} />
          <Photo src={require('../../photos/people/00000000007.jpg')} />
          <Photo src={require('../../photos/people/00000000008.jpg')} />
          <Photo src={require('../../photos/people/00000000009.jpg')} />
          <Photo src={require('../../photos/people/00000000010.jpg')} />
          <Photo src={require('../../photos/people/00000000011.jpg')} />
          <Photo src={require('../../photos/people/00000000012.jpg')} />
          <Photo src={require('../../photos/people/00000000013.jpg')} />
          <Photo src={require('../../photos/people/00000000014.jpg')} />
          <Photo src={require('../../photos/people/00000000015.jpg')} />
          <Photo src={require('../../photos/people/00000000016.jpg')} />
          <Photo src={require('../../photos/people/00000000017.jpg')} />
          <Photo src={require('../../photos/people/00000000018.jpg')} />
          <Photo src={require('../../photos/people/00000000019.jpg')} />
          <Photo src={require('../../photos/people/00000000020.jpg')} />
          <Photo src={require('../../photos/people/00000000021.jpg')} />
          <Photo src={require('../../photos/people/00000000022.jpg')} />
          <Photo src={require('../../photos/people/00000000023.jpg')} />
          <Photo src={require('../../photos/people/00000000024.jpg')} />
          <Photo src={require('../../photos/people/00000000025.jpg')} />
          <Photo src={require('../../photos/people/00000000026.jpg')} />
          <Photo src={require('../../photos/people/00000000027.jpg')} />
          <Photo src={require('../../photos/people/00000000028.jpg')} />
          <Photo src={require('../../photos/people/00000000029.jpg')} />
          <Photo src={require('../../photos/people/00000000030.jpg')} />
        </Slider>
      </Page>
    );
  }
}

export default PeoplePage;
