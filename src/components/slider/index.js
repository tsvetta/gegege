import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import styles from './styles.css';
const cx = classnames.bind(styles);

class Slider extends React.PureComponent {
  render() {
    const { props } = this;

    return (
      <div className={styles.wrapper}>
        <ul className={cx('slider', {
          [`theme_${props.theme}`]: Boolean(props.theme),
        })}>
          {React.Children.map(props.children, child => (
            <li className={styles.slide}>
              {React.cloneElement(child, {
                className: cx(child.props.className, styles.slideContent),
              })}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Slider.propTypes = {
  theme: PropTypes.oneOf(['day', 'night']),
};

export default Slider;
