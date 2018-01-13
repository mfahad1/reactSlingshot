/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import GameScore from './GameScore';
import AppBar from 'material-ui/AppBar';
const injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <AppBar
            title="Title"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
        </div>
        <Switch>
          <Route exact path="/" component={GameScore} />
          <Route path="/game-score" component={GameScore} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
