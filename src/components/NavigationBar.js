import React from 'react';
import t from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import media from '../styled/media';
import Logo from '../svg/logo.svg';

const primary = props => props.theme.colors.primary;
const white = props => props.theme.colors.white;

const NavBar = styled.nav`
  height: 3rem;
  display: flex;
  background: ${white};
  color: ${primary};
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1);
  z-index: 10;
  position: relative;
`;

const Header = styled.div`
  width: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.desktop`
    display: none;
  `}
  svg {
    fill: ${primary};
    margin-top: 5px;
  }
`;

const Body = styled.div`
  display: flex;
  flex: 1;
  padding: 0 1rem;
`;

const Left = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  a {
    margin-left: 10px;
  }
`;

const OnlyMobile = styled.div`
  display: none;
  ${media.desktop`
    display: flex;
  `}
`;

const Iconbutton = styled.div`
  cursor: pointer;
  color: ${primary};
  border-radius: 50%;
  &:hover {
    opacity: 0.9
  }
`;


const NavigationBar = props => (
  <NavBar>
    <Header>
      <Link to="/"><Logo height={30} width={120} /></Link>
    </Header>
    <Body>
      <Left>
        <OnlyMobile>
          <Iconbutton onClick={props.toggleSideMenu}>
            <i className="fa fa-bars" aria-hidden="true" />
          </Iconbutton>
        </OnlyMobile>
      </Left>
      <Right>
        <a className="button is-white" href="https://api.pondera.cl/api/v1/admin/excel">
          Descargar Excel
        </a>
        {props.token ? 'Salir' : (
          <Link to="/" className="button is-primary">Log In</Link>
        )}
      </Right>
    </Body>
  </NavBar>
);

NavigationBar.propTypes = {
  toggleSideMenu: t.func.isRequired,
};

export default withRouter(connect(state => ({
  token: state.token,
}))(NavigationBar));
