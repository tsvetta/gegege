import * as React from 'react';
import { withRouter } from 'react-router'
import classnames from 'classnames/bind';
import * as R from 'ramda';
import { routes } from '../../';

import styles from './styles.css';
const cx = classnames.bind(styles);

class Layout extends React.PureComponent {
  render() {
    const { props } = this;
    const currentRouteData = routes.find(r => r.path === props.location.pathname);
    const theme = R.path(['props', 'theme'], currentRouteData)

    return (
      <div className={cx('layout', {
        [`theme_${theme}`]: Boolean(theme),
      })}>
        {props.children}
      </div>
    );
  }
}

Layout.propTypes = {

}

export default withRouter(Layout)
