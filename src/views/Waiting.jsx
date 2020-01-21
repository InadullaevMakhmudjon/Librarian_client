import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { EventEmitter } from '../events/Event';
import { setStudent as insertStudent } from '../redux/student/student.actions';
import { Text, Container } from '../components/index';
import {
  Waiting, Holder,
} from '../components/waiting/controllers';

const WaitingComponent = ({ setStudent }) => {
  const history = useHistory();
  useEffect(() => {
    let unmounted = false;
    EventEmitter.on('studentReceived', (student) => {
      if (!unmounted) {
        setStudent(student);
        history.push('/details');
      }
    });
    return () => { unmounted = true; };
  }, [setStudent, history]);
  return (
    <Container>
      <Holder>
        <Waiting />
        <Text color="#149FC8" size="44px">Please, Validate yourself</Text>
        <Text color="#149FC8" size="44px">using your ID card</Text>
      </Holder>
    </Container>
  );
};

WaitingComponent.propTypes = {
  setStudent: PropTypes.func,
};

WaitingComponent.defaultProps = {
  setStudent: () => {},
};
const stateToProps = () => ({});

const dispatchesToProps = { setStudent: insertStudent };

export default connect(stateToProps, dispatchesToProps)(WaitingComponent);
