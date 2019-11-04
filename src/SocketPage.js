import React, { useEffect, useContext } from 'react';
import { SocketContext } from './shared/socket';
import useSocket from './useSocket'
import { Link, Switch, Route } from "react-router-dom";
import Home from './Home';
import About from './About';

export default () => {
  const { socket } = useContext(SocketContext);
  const { openConnection } = socket;
  const {connect, send, close} = useSocket();

  useEffect(() => {
    connect();

    if (openConnection) {
      send({"user_ssid":"SocketPage"});
      // return () => close();
    }
  }, [connect, send, openConnection, close]);

  return (
    <div>
      <ul>
        <li>
          <Link to="/socket/home">Home</Link>
        </li>
        <li>
          <Link to="/socket/about">About</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/socket/home">
          <Home />
        </Route>
        <Route exact path="/socket/about">
          <About />
        </Route>
      </Switch>
    </div>
  )
}