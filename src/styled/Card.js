import styled from 'styled-components';

const white = props => props.theme.colors.white;

const Card = styled.div`
  background-color: ${white};
  margin: 1rem;
  padding: 1rem;
  border-radius: 5px;
  flex-direction: column;
`;

export default Card;
