import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteStudent } from './redux/student/student.actions';
import { HomeButton } from './components/index';
import Main from './views/Main';
import Waiting from './views/Waiting';
import Details from './views/Details';
import Home from './views/Home';

const AppRouter = ({ removeStudent }) => (
  <Router>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/waiting" component={Waiting} />
      <Route path="/details" component={Details} />
      <Route path="/home" component={Home} />
    </Switch>

    <Link to="/">
      <HomeButton onClick={() => removeStudent()} />
    </Link>
  </Router>
);

AppRouter.propTypes = {
  removeStudent: PropTypes.func.isRequired,
};

const dispatchToActions = { removeStudent: deleteStudent };

export default connect(() => ({}), dispatchToActions)(AppRouter);
