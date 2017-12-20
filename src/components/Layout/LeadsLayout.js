import React from 'react';
import styled from 'styled-components';
import media from '../../styled/media';

const flex = props => props.flex || 1;

const Container = styled.div`
  display: flex;
  flex: 1;
  ${media.desktop`
    flex-wrap: wrap;
  `}
`;

const Col = styled.div`
  display: flex;
  flex: ${flex};
  flex-direction: column;
`;

const Box = styled.div`
  max-height: 35rem;
  overflow: scroll;
`;

export default props => (
  <Container>
    <Col flex={3}>
      {props.children[0]}
    </Col>
    <Col flex={2}>
      <Box>{props.children[1]}</Box>
      {props.children[2]}
    </Col>
  </Container>
);
