import * as React from 'react';
import classnames from 'classnames/bind';

import styles from './styles.css';
const cx = classnames.bind(styles);

class Photo extends React.PureComponent {
  render() {
    const { props } = this;

    return (
      <img src={props.src} alt={props.alt} className={cx(styles.photo, props.className)} />
    );
  }
}

export default Photo;
