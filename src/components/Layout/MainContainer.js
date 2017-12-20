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
  height: calc(100vh - 3rem);
  transition: transform .5s ease;
  transform: translateX(260px);
  display: flex;
  justify-content: center;

  ${media.desktop`
    transform: translateX(${x});
    width: 100vw;
  `}
`;

export default Content;
