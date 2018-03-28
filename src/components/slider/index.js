import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import { Scrollbars } from 'react-custom-scrollbars';

import styles from './styles.css';
const cx = classnames.bind(styles);

class Slider extends React.PureComponent {
  state = {
    currentSlideIndex: 0,
  };

  slideWidth = 0;
  slides = [];

  setSlidesRefs = (slide) => {
    if (this.slideWidth === 0) {
      this.slideWidth = slide.clientWidth;
    }

    this.slides = this.slides.concat(slide);
  }

  render() {
    const { props, state } = this;
    const sliderWidthPercents = `${100 * props.children.length}%`;
    const slideWidthPercents = `${100 / props.children.length}%`;

    return (
      <div className={styles.wrapper}>
        <Scrollbars
          universal
          autoHide
          autoHideTimeout={200}
          renderTrackHorizontal={this.renderTrack}
          renderThumbHorizontal={this.renderThumb}
          onWheel={this.handleWheel}
          onScroll={this.handleScroll}
          onScrollStop={this.handleScrollStop}
        >
          <ul
            style={{ width: sliderWidthPercents }}
            className={cx('slider', {
              [`theme_${props.theme}`]: Boolean(props.theme),
            })}
          >
            {React.Children.map(props.children, (child) => (
              <li
                ref={this.setSlidesRefs}
                style={{ width: slideWidthPercents }}
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

  handleScroll = (e) => {
    const { scrollWidth, scrollLeft, firstChild } = e.target;
    const slidesCount = this.slides.length;
    const scrollRatio = scrollLeft / this.slideWidth;
    const currentSlideIndex = Math.round(scrollRatio);

    this.setState({ currentSlideIndex });
  }

  handleScrollStop = () => {
    // to rerender even if slide haven't changed
    this.forceUpdate(this.scrollToCurrentSlide);
  }

  scrollToCurrentSlide = () => {
    const currentSlide = this.slides[this.state.currentSlideIndex];

    currentSlide.scrollIntoView({ behavior: 'smooth' });
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
