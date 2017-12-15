import React from 'react';
import styled from 'styled-components';

const primary = props => props.theme.colors.primary;
const grey = props => props.theme.colors.grey;
const white = props => props.theme.colors.white;
const textColor = props => props.theme.colors.textColor;

const x = props => (
  props.open ? '0' : '-260px'
);

const Menu = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 260px;
  background-color: ${white};
  color: ${textColor};
  transition: transform .5s ease;
  z-index: 1;
  padding: 0 1rem;

  @media (max-width: 800px) {
    transform: translateX(${x});
  }
`;

const Header = styled.div`
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

const selectedStyles = props => (
  props.selected ? `
    background-color: ${props.theme.colors.primary};
    color: ${props.theme.colors.white};
    &:hover {
      background-color: ${props.theme.colors.primary};
      color: ${props.theme.colors.white};
      opacity: 0.9
    }
  ` : ''
);


const MenuItem = styled.div`
  cursor: pointer;
  margin: 5px 0.5rem;
  padding: 5px 1rem;
  border-radius: 3px;
  &:hover {
    color: ${primary};
    background-color: ${grey}
  }
  ${selectedStyles}
`

const submenu = ({ className, children, open }) => (
  <div className={className}>
    {open && children}
  </div>
);

const SubMenu = styled(submenu)`
margin: 5px 1.5rem;
border-left: 2px solid ${grey};
`;

const SideMenu = props => (
  <Menu open={props.open}>
    <MenuItem>Crear cuenta</MenuItem>
    <MenuItem selected>Leads</MenuItem>
    <SubMenu open>
      <MenuItem>Exportar CSV</MenuItem>
      <MenuItem>Descargar Excel</MenuItem>
    </SubMenu>
  </Menu>
);

export default SideMenu;
