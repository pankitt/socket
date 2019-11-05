import React, { useReducer, useState } from 'react';
import {Switch, Route}  from 'react-router-dom';
import './App.css';
import Menu from './Menu';
import SocketPage from './SocketPage';

import { SocketContext, socketReducer } from './shared/socket';


export default () => {
  const [socket, socketDispatch] = useReducer(socketReducer, {});
  const [list, setList] = useState({});
  console.log('list', list);

  const setStorage = (id) => {
    if (list && Object.keys(list).find(x => +x === id)) {
      return setList(prevState => {
        const state = { ...prevState };
        delete state[id];
        return state;
      });
    }
    // {...list, [id]:id}
    return setList(prevState => ({...prevState, [id]:id}));
  };

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
      <div className={'App'}>
        <button onClick={() => setStorage(10)}>10</button>
        <button onClick={() => setStorage(20)}>20</button>
        <button onClick={() => setStorage(30)}>30</button>
      </div>

    </>
  );
};
