import React from 'react';
import { Container, Text } from '../components/index';
import {
  BtnBorrow,
  Image,
  TextContainer,
  Holder,
} from '../components/details/controllers';

export default () => (
  <Container flex justify="center">
    <Holder>
      <Image />
      <TextContainer>
        <Text size="35px" color="black">Name: Nazarov Ahmad</Text>
        <Text size="35px" color="black">Student ID: U1710073</Text>
        <Text size="35px" color="black">Department: SOL</Text>
        <Text size="35px" color="black">Status: No overdue</Text>
        <Text size="35px" color="black">Type:   Student</Text>
      </TextContainer>
    </Holder>
    <BtnBorrow>
      <Text size="30px" color="white">START BORROWING</Text>
    </BtnBorrow>
  </Container>
);
