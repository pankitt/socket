import React, { useEffect, useContext } from 'react';
import { SocketContext } from './shared/socket';
import useSocket from './useSocket'

export default () => {
  const { socket } = useContext(SocketContext);
  const { openConnection } = socket;
  const {connect, send, close} = useSocket();

  useEffect(() => {
    if (openConnection) {
      send({"user_ssid":"HOME"});
      send({subscribe_multiline:[{live_sec_1B4:{}}]});
    }
  }, [connect, send, openConnection]);

  return (
    <div className="App">
      <h3>Home</h3>
      <span
        className={'but'}
        onClick={() => {
          send({"user_ssid":"HOME"});
          send({subscribe_multiline:[{live_sec_1B4:{}}]});
        }}>Send</span>
      <span
        className={'but'}
        onClick={() => {
          close();
        }}>Close</span>
    </div>
  )
}