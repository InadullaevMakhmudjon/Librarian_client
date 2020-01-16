import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ClearIcon from '@material-ui/icons/Clear';
import { removeBook } from '../../redux/student/student.actions';
import { Book, BookContents, BtnRemove } from './controllers';
import { Image, Text } from '../index';

const ABook = ({
  id, title, year, author, code, ISBN, image, deleteBook,
}) => (
  <Book>
    <Image
      width="100px"
      height="120px"
      src={image}
    />
    <BookContents>
      <Text size="14px">{title}</Text>
      <Text size="14px" color="grey">{`Published: ${year}`}</Text>
      <Text size="14px" color="grey">{`Author: ${author}`}</Text>
      <Text size="14px" color="grey">{`Code: ${code}`}</Text>
      <Text size="14px" color="grey">{`ISBN: ${ISBN}`}</Text>
    </BookContents>
    <BtnRemove onClick={() => deleteBook(id)}>
      <ClearIcon />
    </BtnRemove>
  </Book>
);

ABook.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  ISBN: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  deleteBook: PropTypes.func.isRequired,
};

const dispatchesToProps = { deleteBook: (id) => removeBook(id) };

export default connect(() => ({}), dispatchesToProps)(ABook);
