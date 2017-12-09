import React, { Component } from 'react';
import t from 'prop-types';

class InfiniteScroll extends Component {
  constructor(props) {
    super(props);
    this.onScroll = this.onScroll.bind(this);
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll() {
    if (
      (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 50) &&
      React.Children.count(this.props.children) &&
      !this.props.isLoading
    ) {
      this.props.onInfiniteScroll();
    }
  }

  render() {
    return (
      <div className="infinite-scroll">
        {this.props.children}
      </div>
    );
  }
}

InfiniteScroll.propTypes = {
  isLoading: t.bool,
  onInfiniteScroll: t.func.isRequired,
};

InfiniteScroll.defaultProps = {
  isLoading: false,
};

export default InfiniteScroll;
