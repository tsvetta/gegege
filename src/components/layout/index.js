import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import { withTheme } from '../../HOCs/with-theme';

import styles from './styles.css';
const cx = classnames.bind(styles);

class Layout extends React.PureComponent {
  render() {
    const { props } = this;

    return (
      <div className={cx('layout', {
        [`theme_${props.theme}`]: Boolean(props.theme),
      })}>
        {props.children}
      </div>
    );
  }
}

Layout.propTypes = {
  theme: PropTypes.oneOf(['day', 'night']),
};

export default withTheme(Layout)
