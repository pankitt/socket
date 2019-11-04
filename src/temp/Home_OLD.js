import React, { useEffect } from 'react';
import useSocket_OLD from './useSocket'

export default () => {
  const {connection, openConnection} = useSocket_OLD('bullet');

  useEffect(() => {
    if(openConnection) {
      connection.send(JSON.stringify( {"user_ssid":"HOME"} ));
      connection.send(JSON.stringify( {subscribe_multiline:[{live_sec_1B4:{}}]} ));
    }
  }, [openConnection, connection]);

  return (
    <div className="App">
      <h3>Home</h3>
      <span
        className={'but'}
        onClick={() => {
          connection.send(JSON.stringify( {"user_ssid":"SEND"} ));
          connection.send(JSON.stringify( {"subscribe_multiline":[{"live_sec_1B4":{}}]} ));
        }}>Send</span>
      <span
        className={'but'}
        onClick={() => {
          connection.close();
        }}>Close</span>
    </div>
  )
}