import React, { Fragment } from 'react';
import t from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { removeToken } from '../redux/session';
import { getLeads } from '../redux/leads';
import { getCount } from '../redux/count';
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
  button {
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


const NavigationBar = (props) => {
  const onRefresh = () => {
    props.dispatch(getLeads(props.token));
    props.dispatch(getCount(props.token));
  };

  return (
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
          {props.token ? (
            <Fragment>
              <button
                onClick={onRefresh}
                className={`button is-primary ${props.loading ? 'is-loading' : ''}`}
              >
                <span className="icon">
                  <i className="fa fa-refresh" />
                </span>
                <span>Actualizar</span>
              </button>
              <button
                className="button is-primary"
                onClick={() => {
                  props.dispatch(removeToken());
                }}
              >
              Salir
              </button>
            </Fragment>
          ) : (
            <Link to="/" className="button is-primary">Log In</Link>
          )}
        </Right>
      </Body>
    </NavBar>
  );
};

NavigationBar.propTypes = {
  toggleSideMenu: t.func.isRequired,
};

export default withRouter(connect(state => ({
  token: state.token,
  loading: state.leads.loading,
}))(NavigationBar));
