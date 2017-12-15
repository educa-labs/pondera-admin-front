import React from 'react';
import styled from 'styled-components';

const grey = props => props.theme.colors.grey;

const submenu = ({ className, children, open }) => (
  <div className={className}>
    {open && children}
  </div>
);

const SubMenu = styled(submenu)`
  margin: 5px 1.5rem;
  border-left: 2px solid ${grey};
`;

export default SubMenu;
