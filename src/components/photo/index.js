import * as React from 'react';
import styles from './styles.css';

class Photo extends React.PureComponent {
  render() {
    const { props } = this;

    return (
      <img src={props.src} alt={props.alt} className={styles.photo} />
    );
  }
}

export default Photo;
