import React, { Fragment } from 'react';
import t from 'prop-types';
import is from 'is_js';


const FilteredList = ({ filter, filterBy, children }) => {
  const mapper = (child) => {
    if (filter.legth < 2) return child;
    if (is.not.propertyDefined(child.props, filterBy)) {
      throw new Error(`filterBy property ${filterBy} not present in ListItem props`);
    } else {
      const value = child.props[filterBy];
      if (is.include(value.toLowerCase(), filter)) return child;
      return null;
    }
  };

  return (
    <Fragment>
      {React.Children.map(children, mapper)}
    </Fragment>
  );
};

FilteredList.propTypes = {
  filter: t.string.isRequired,
  filterBy: t.string,
};

FilteredList.defaultProps = {
  filterBy: 'label',
};

export default FilteredList;
