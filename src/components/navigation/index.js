import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';

import { withTheme } from '../../HOCs/with-theme';

import styles from './styles.css';
const cx = classnames.bind(styles);

class Navigation extends React.PureComponent {
  render() {
    const { props } = this;

    return (
      <nav className={cx('navigation', {
        [`theme_${props.theme}`]: Boolean(props.theme),
      })}>
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
      text: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    }).isRequired
  ),
  theme: PropTypes.oneOf(['day', 'night']),
}


export default withTheme(Navigation)
