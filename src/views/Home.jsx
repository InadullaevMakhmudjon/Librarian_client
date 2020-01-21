import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import { EventEmitter } from '../events/Event';
import Dialog from '../components/home/Dialog';
import Book from '../components/home/Book';
import Signal from '../assets/signal.png';
import { addBook, deleteStudent } from '../redux/student/student.actions';
import { Container, Text, Image } from '../components/index';
import {
  BtnDone,
  Header,
  TextContainer,
  BookContainer,
  Empty,
} from '../components/home/controllers';

const Home = ({
  // eslint-disable-next-line react/prop-types
  student, books, insertBook, removeStudent,
}) => {
  const [open, setOpen] = useState(0);
  const history = useHistory();
  useEffect(() => {
    let unmounted = false;
    EventEmitter.on('bookReceived', (book) => {
      const found = books.map(({ id }) => id).includes(book.id);
      if (!unmounted && !found && student) {
        insertBook(book);
      }
    });
    return () => { unmounted = true; };
  }, [insertBook, books, student]);
  return (student ? (
    <Container flex align="center" column>
      <Header>
        <TextContainer>
          <Text size="25px">{`Name: ${student.secondName} ${student.name}`}</Text>
          <Text size="25px">{`Student ID: ${student.studentId}`}</Text>
          <Text size="25px">{`Department: ${student.department}`}</Text>
          <Text size="25px">{`Status: ${student.status}`}</Text>
          <Text size="25px">{`Type: ${student.type}`}</Text>
        </TextContainer>
        <Image
          position="absolute"
          left="100px"
          top="20px"
          width="200px"
          background="white"
          height="220px"
          src={`${process.env.REACT_APP_SERVER_URL}${student.image}`}
        />
      </Header>
      <BookContainer>
        {
        books.length ? (
          <Grid container>
            {
              books.map((book) => (
                <Grid item xs={4} key={`${book.id}`}>
                  <Book
                    id={book.id}
                    title={book.title}
                    year={book.year}
                    author={book.author}
                    code={book.code}
                    ISBN={book.ISBN}
                    image={book.image}
                  />
                </Grid>
              ))
}
          </Grid>
        ) : (
          <Empty>
            <Image
              width="150px"
              height="150px"
              src={Signal}
              alt="signal"
              noBorder
            />
            <Text size="24px" color="#949494">Ready for receiving books</Text>
          </Empty>
        )
      }
      </BookContainer>
      <BtnDone onClick={() => { setOpen(1); }}>
        <Text size="30px" color="white">DONE</Text>
      </BtnDone>
      <Dialog name={`${student.secondName} ${student.name}`} quantity={books.length} open={open} close={() => { setOpen(0); removeStudent(); history.push('/'); }} />
    </Container>
  ) : <>No Student Found</>);
};

Home.propTypes = {
  student: PropTypes.object,
  books: PropTypes.array.isRequired,
  insertBook: PropTypes.func.isRequired,
  removeStudent: PropTypes.func.isRequired,
};

Home.defaultProps = {
  student: {},
};

const stateToProps = (state) => ({ student: state.students.student, books: state.students.books });

const dispatchsToProps = { insertBook: addBook, removeStudent: deleteStudent };

export default connect(stateToProps, dispatchsToProps)(Home);
