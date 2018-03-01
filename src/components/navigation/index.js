import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './styles.css';

class Navigation extends React.PureComponent {
  render() {
    const { props } = this;

    return (
      <nav className={styles.navigation}>
        <ul className={styles.list}>
          {props.routes.map(route => (
            <li key={route.to} className={styles.item}>
              <Link to={route.to}>
                {route.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

Navigation.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      to: PropTypes.string,
    })
  ),
}

export default Navigation;
