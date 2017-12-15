import React from 'react';
import t from 'prop-types';
import styled from 'styled-components';
import media from '../styled/media';

const primary = props => props.theme.colors.primary;

const NavBar = styled.nav`
  height: 3rem;
  display: flex;
  background: ${primary};
  color: white;
`;

const Header = styled.div`
  width: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.desktop`
    display: none;
  `}
`;

const Body = styled.div`
  display: flex;
  flex: 1;
  padding: 0 1rem;
`;

const Left = styled.div`
  display: flex;
  flex: 1;
  jistify-content: center;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

const OnlyMobile = styled.div`
  display: none;
  ${media.desktop`
    display: flex;
  `}
`;

const Iconbutton = styled.div`
  cursor: pointer;
  border-radius: 50%;
  &:hover {
    opacity: 0.9
  }
`;


const NavigationBar = props => (
  <NavBar>
    <Header>
      Logo
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
        Ingresa
      </Right>
    </Body>
  </NavBar>
);

NavigationBar.propTypes = {
  toggleSideMenu: t.func.isRequired,
};

export default NavigationBar;
