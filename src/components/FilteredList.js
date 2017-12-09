import React, { Fragment } from 'react';
import t from 'prop-types';
import is from 'is_js';


const FilteredList = ({
  filter, filterBy, selections, selectBy, children,
}) => {
  const mapper = (child) => {
    if (selectBy) {
      try {
        if (is.not.empty(selections)) {
          if (is.not.inArray(child.props[selectBy], selections)) {
            return null;
          }
        }
      } catch (err) {
        throw new Error(`selectBy property ${filterBy} not present in ListItem props`);
      }
    }

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
  selections: t.arrayOf(t.number),
  selectBy: t.string,
  filterBy: t.string,
};

FilteredList.defaultProps = {
  filterBy: 'label',
  selectBy: null,
  selections: null,
};

export default FilteredList;
