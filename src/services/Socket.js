import Student from './Student';
import Book from './Book';

const socket = require('socket.io-client')(process.env.REACT_APP_SERVER_URL);

Student(socket);
Book(socket);
