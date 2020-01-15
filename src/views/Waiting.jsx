import React from 'react';
import { Text, Container } from '../components/index';
import {
  Waiting, Holder,
} from '../components/waiting/controllers';

export default () => (
  <Container>
    <Holder>
      <Waiting />
      <Text color="#149FC8" size="44px">Please, Validate yourself</Text>
      <Text color="#149FC8" size="44px">using your ID card</Text>
    </Holder>
  </Container>
);
