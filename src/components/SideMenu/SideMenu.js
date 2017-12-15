import React from 'react';
import styled from 'styled-components';
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
`;


const SideMenu = props => (
  <Menu open={props.open}>
    <MenuItem>Crear cuenta</MenuItem>
    <MenuItem>Descargar Excel</MenuItem>
    <MenuItem>Leads</MenuItem>
    <SubMenu>
      <MenuItem>Exportar CSV</MenuItem>
    </SubMenu>
  </Menu>
);

export default SideMenu;
