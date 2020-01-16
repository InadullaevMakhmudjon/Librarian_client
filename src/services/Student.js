import { EventEmitter } from '../events/Event';

export default (socket) => {
  socket.on('studentReceived', (student) => {
    EventEmitter.emit('studentReceived', student);
  });
};
