import { useState, useEffect } from 'react';

export default function useSocket_OLD(url) {
  const [connection, setConnection] = useState(null);
  const [openConnection, setOpen] = useState(null);

  useEffect(() => {
    setConnection(new WebSocket(`wss://www.favbet.com/${url}`));
  }, [url]);

  useEffect(() => {
    if(connection) {
      connection.onopen = function (event) {
        setOpen(true);
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
      return connection.close.bind(connection);
    }
  }, [connection]);

  return {connection, openConnection};
}