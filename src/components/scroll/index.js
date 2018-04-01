import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import stylePropType from 'react-style-proptype';


import styles from './styles.css';
const cx = classnames.bind(styles);

const MIN_THUMB_WIDTH = 50;

class Scroll extends React.Component {
  scrollEl;
  contentEl;
  thumbEl;

  state = {
    mounted: false,
    thumbPosition: 0,
  }

  setScrollRef = (scrollEl) => {
    if (!this.scrollEl) {
      this.scrollEl = scrollEl;
    }
  }

  setContentRef = (contentEl) => {
    if (!this.contentEl) {
      this.contentEl = contentEl;
    }
  }

  setThumbRef = (thumbEl) => {
    if (!this.thumbEl) {
      this.thumbEl = thumbEl;
    }
  }

  componentDidMount() {
    this.setState({
      mounted: true,
    });
  }

  render() {
    const { props, state } = this;

    return (
      <div
        ref={this.setScrollRef}
        style={props.style}
        className={cx(styles.wrapper, props.className)}
      >
        <div
          className={styles.scrollableArea}
          onScroll={this.handleScroll}
        // onWheel={this.handleWheel}
        >
          <div
            ref={this.setContentRef}
            style={props.contentStyle}
            className={cx(styles.content, props.contentClassName)}
          >
            {this.props.children}
          </div>
        </div>
        {this.renderTrackHorizontal()}
      </div>
    );
  }

  renderTrackHorizontal = () => {
    const thumbStyles = {
      width: this.getThumbHorizontalWidth(),
      transform: `translate3d(${this.state.thumbPosition}px, 0, 0)`,
    };

    return (
      <div className={styles.track}>
        <div className={styles.thumb} style={thumbStyles} ref={this.setThumbRef} />
      </div>
    );
  }

  getThumbHorizontalWidth() {
    if (!this.state.mounted || !this.scrollEl) {
      return 0;
    }

    const { clientWidth } = this.scrollEl;
    const { scrollWidth } = this.contentEl;
    const width = Math.ceil(clientWidth / scrollWidth);

    return Math.max(MIN_THUMB_WIDTH, width);
  }

  // handleWheel(event) {
  //   const { currentTarget, deltaX, deltaY } = event;
  //   const delta = deltaX == 0 ? deltaY : deltaX;

  //   currentTarget.firstChild.scrollLeft += delta;

  //   event.preventDefault();
  // }

  handleScroll = (event) => {
    if (this.props.onScroll) {
      this.props.onScroll(event);
    }

    const { scrollLeft } = event.target;
    const { scrollWidth } = this.contentEl;
    const { clientWidth } = this.scrollEl;
    const { clientWidth: thumbWidth } = this.thumbEl;

    const thumbPosition = scrollLeft / scrollWidth * clientWidth;
    const distanceToEnd = clientWidth - thumbPosition - thumbWidth;

    this.setState({
      thumbPosition: distanceToEnd < 3
        ? clientWidth - thumbWidth
        : thumbPosition,
    });
  }

  handleScrollStop() {
    if (this.props.onScrollStop) {
      this.props.onScrollStop();
    }
  }
}

Scroll.propTypes = {
  style: stylePropType,
  className: PropTypes.string,
  contentStyle: stylePropType,
  contentClassName: PropTypes.string,
  onScroll: PropTypes.func,
  onScrollStop: PropTypes.func,
};

export default Scroll;
