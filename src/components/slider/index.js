import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import { withTheme } from '../../HOCs/with-theme';
import Scroll from '../scroll';

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
      <div className={styles.slider}>
        <Scroll
          onScroll={this.handleScroll}
          onScrollStop={this.handleScrollStop}
          contentStyle={{ width: sliderWidthPercents }}
          contentClassName={cx('sliderContent', { [`theme_${props.theme}`]: Boolean(props.theme) })}
        >
          {React.Children.map(props.children, (child) => (
            <div
              ref={this.setSlidesRefs}
              style={{ width: slideWidthPercents }}
              className={styles.slide}
            >
              {React.cloneElement(child, {
                className: cx(child.props.className, styles.slideContent),
              })}
            </div>
          ))}
        </Scroll>
      </div>
    );
  }

  handleScroll = (e) => {
    const { scrollLeft } = e.target;
    const scrollRatio = scrollLeft / this.slideWidth;

    this.setState({
      currentSlideIndex: Math.round(scrollRatio)
    });
  }

  handleScrollStop = () => {
    // to rerender even if slide haven't changed
    this.forceUpdate(this.scrollToCurrentSlide);
  }

  scrollToCurrentSlide = () => {
    const currentSlide = this.slides[this.state.currentSlideIndex];

    currentSlide.scrollIntoView({ behavior: 'smooth' });
  }
}

Slider.propTypes = {
  theme: PropTypes.oneOf(['day', 'night']),
};

export default withTheme(Slider);
