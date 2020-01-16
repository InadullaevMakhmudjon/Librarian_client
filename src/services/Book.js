import { EventEmitter } from '../events/Event';

export default (socket) => {
  socket.on('bookReceived', (book) => {
    EventEmitter.emit('bookReceived', book);
  });
};
