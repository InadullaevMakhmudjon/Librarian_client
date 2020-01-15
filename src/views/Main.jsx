import React from 'react';
import { Text } from '../components/index';
import {
  Container,
  BtnCountainer,
  Button,
} from '../components/main/controllers';

export default () => (
  <Container>
    <Text size="80px" top="-40px" color="#03BCF1" bottom="40px">WELCOME TO IUT LIBRARY</Text>
    <BtnCountainer>
      <Button variant="contained">
        <Text color="white">SEARCH BOOK</Text>
      </Button>
      <Button variant="contained">
        <Text color="white">BORROW BOOK</Text>
      </Button>
      <Button variant="contained">
        <Text color="white">RETURN BOOK</Text>
      </Button>
    </BtnCountainer>
  </Container>
);
