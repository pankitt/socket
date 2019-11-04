import { useContext } from 'react';
import { SocketContext, setConnection } from './shared/socket';

const connection = new WebSocket(`wss://www.favbet.com/bullet`);

const useSocket = () => {
  const { socketDispatch } = useContext(SocketContext);

  const connect = () => {
    connection.onopen = (event) => {
      socketDispatch(setConnection(true));
      console.log('WebSocket Open:', event);
    };
    connection.onmessage = (event) => {
      console.log(event);
      console.log(JSON.parse(event.data));
    };
    connection.onerror = (event) => {
      console.error("WebSocket Error:", event);
    };
    connection.onclose = (event) => {
      console.log("WebSocket Close:", event);
    };
  };

  const close = () => {
    socketDispatch(setConnection(false));
    connection.close();
  };

  const send = (msg) => {
    connection.send(JSON.stringify(msg));
  };

  return {
    connect,
    send,
    close
  };
};

export default useSocket;