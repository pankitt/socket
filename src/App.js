import React, { useReducer } from 'react';
import {Switch, Route}  from 'react-router-dom';
import './App.css';
import Menu from './Menu'
import SocketPage from './SocketPage';

import { SocketContext, socketReducer } from './shared/socket';


export default () => {
  const [socket, socketDispatch] = useReducer(socketReducer, {});

  return (
    <>
      <Menu />
      <Switch>
        <Route exact path="/" children={<h3>No Socket</h3>} />
        <Route path="/socket">
          <SocketContext.Provider value={{ socket, socketDispatch }}>
            <SocketPage />
          </SocketContext.Provider>
        </Route>
      </Switch>
    </>
  );
};
