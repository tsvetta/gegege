import * as React from 'react';
import styles from './styles.css';

class Page extends React.PureComponent {
  render() {
    const { props } = this;

    return (
      <section className={styles.page}>
        {props.children}
      </section>
    );
  }
}

export default Page;
