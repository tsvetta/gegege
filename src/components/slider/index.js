import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import { Scrollbars } from 'react-custom-scrollbars';

import styles from './styles.css';
const cx = classnames.bind(styles);

class Slider extends React.PureComponent {
  render() {
    const { props } = this;
    const sliderWidth = 100 * props.children.length;
    const slideWidth = 100 / props.children.length;

    return (
      <div className={styles.wrapper}>
        <Scrollbars
          universal
          autoHide
          autoHideTimeout={200}
          renderTrackHorizontal={this.renderTrack}
          renderThumbHorizontal={this.renderThumb}
          onWheel={this.handleWheel}
        >
          <ul
            style={{ width: `${sliderWidth}%` }}
            className={cx('slider', {
              [`theme_${props.theme}`]: Boolean(props.theme),
            })}
          >
            {React.Children.map(props.children, child => (
              <li
                style={{ width: `${slideWidth}%` }}
                className={styles.slide}
              >
                {React.cloneElement(child, {
                  className: cx(child.props.className, styles.slideContent),
                })}
              </li>
            ))}
          </ul>
        </Scrollbars>
      </div>
    );
  }

  handleWheel(event) {
    const { currentTarget, deltaX, deltaY } = event;
    const delta = deltaX == 0 ? deltaY : deltaX;

    currentTarget.firstChild.scrollLeft += delta;

    event.preventDefault();
  }

  renderTrack(props) {
    return (
      <div {...props} className={styles.track} />
    );
  }

  renderThumb(props) {
    return (
      <div {...props} className={styles.thumb} />
    );
  }
}

Slider.propTypes = {
  theme: PropTypes.oneOf(['day', 'night']),
};

export default Slider;
