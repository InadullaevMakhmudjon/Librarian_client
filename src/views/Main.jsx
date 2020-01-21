import React from 'react';
import { useHistory } from 'react-router-dom';
import { Text } from '../components/index';
import {
  Container,
  BtnCountainer,
  Button,
} from '../components/main/controllers';
// eslint-disable-next-line react/prop-types
export default () => {
  const history = useHistory();
  return (
    <Container>
      <Text size="80px" top="0px" color="#03BCF1" bottom="120px">WELCOME TO IUT LIBRARY</Text>
      <BtnCountainer>
        <Button variant="contained">
          <Text color="white">SEARCH BOOK</Text>
        </Button>
        <Button variant="contained" onClick={() => history.push('/waiting')}>
          <Text color="white">BORROW BOOK</Text>
        </Button>
        <Button variant="contained" onClick={() => history.push('/waiting')}>
          <Text color="white">RETURN BOOK</Text>
        </Button>
      </BtnCountainer>
    </Container>
  );
};
