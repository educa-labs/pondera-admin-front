import styled from 'styled-components';
import media from '../../styled/media';

const x = props => (
  props.open ? '260px' : '0'
);

const Content = styled.div`
  height: 100vh;
  background: ${props => props.theme.colors.grey};
  padding: 1rem;
  width: calc(100vw - 260px);
  transition: transform .5s ease;
  transform: translateX(260px);

  ${media.desktop`
    transform: translateX(${x});
    width: 100vw;
  `}
`;

export default Content;
