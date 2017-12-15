import React from 'react';
import styled from 'styled-components';
import { withRouter, Link } from 'react-router-dom';
import MenuItem from './MenuItem';
import SubMenu from './SubMenu';
import media from '../../styled/media';

const white = props => props.theme.colors.white;
const textColor = props => props.theme.colors.textColor;

const x = props => (
  props.open ? '0' : '-260px'
);


const Menu = styled.div`
  position: absolute;
  left: 0;
  top: 3rem;
  height: 100vh;
  width: 260px;
  background-color: ${white};
  color: ${textColor};
  transition: transform .5s ease;
  z-index: 1;
  padding: 1rem;
  ${media.desktop`
    transform: translateX(${x});
  `}
  a {
    color: inherit;
  }
`;


const SideMenu = (props) => {
  const { pathname } = props.location;
  return (
    <Menu open={props.open}>
      <MenuItem linkTo="/signup">
        Crear cuenta
      </MenuItem>
      <MenuItem href="https://api.pondera.cl/api/v1/admin/excel">
        Descargar Excel
      </MenuItem>
      <MenuItem linkTo="/leads">
        Leads
      </MenuItem>
      <SubMenu open={pathname === '/leads'}>
        <MenuItem>Exportar CSV</MenuItem>
      </SubMenu>
    </Menu>
  );
};

export default withRouter(SideMenu);
