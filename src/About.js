import React, { useEffect, useContext } from 'react';
import { SocketContext } from './shared/socket';
import useSocket from './useSocket';

export default () => {
  const { socket } = useContext(SocketContext);
  const { openConnection } = socket;
  const {connect, send} = useSocket();

  useEffect(() => {
    if (openConnection) {
      send({"user_ssid":"ABOUT"});
      send({subscribe_multiline:[{live_sec_1B4:{}}]});
    }
  }, [connect, send, openConnection]);

  return (
    <div className="App">
      <h3>About</h3>
    </div>
  );
};