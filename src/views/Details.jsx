import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Container, Text, Image } from '../components/index';
import {
  BtnBorrow,
  TextContainer,
  Holder,
} from '../components/details/controllers';

const Details = ({ student }) => {
  const history = useHistory();
  return student ? (
    <Container flex justify="center">
      <Holder>
        <Image src={`${process.env.REACT_APP_SERVER_URL}${student.image}`} height="350px" width="350px" />
        <TextContainer>
          <Text size="35px" color="grey">{`Name: ${student.secondName} ${student.name}`}</Text>
          <Text size="35px" color="grey">{`Student ID: ${student.studentId}`}</Text>
          <Text size="35px" color="grey">{`Department: ${student.department}`}</Text>
          <Text size="35px" color="grey">{`Status: ${student.status}`}</Text>
          <Text size="35px" color="grey">{`Type: ${student.type}`}</Text>
        </TextContainer>
      </Holder>
      <BtnBorrow onClick={() => history.push('/home')}>
        <Text size="30px" color="white">START BORROWING</Text>
      </BtnBorrow>
    </Container>
  ) : <></>;
};

const stateToProps = (state) => ({ student: state.students.student });

export default connect(stateToProps)(Details);
