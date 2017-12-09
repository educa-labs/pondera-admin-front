import React, { Component } from 'react';

class InfiniteScroll extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll() {
    if (
      (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) &&
      this.props.list.length
    ) {
      this.props.onPaginatedSearch();
    }
  }

  render() {
    return (
      <div className="infinite-scroll">
        {React.Children.only(this.props.children)}
      </div>
    );
  }
}

export default InfiniteScroll;
