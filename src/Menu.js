import React from 'react';
import { Link } from "react-router-dom";

export default () => (
  <div>
    <ul>
      <li>
        <Link to="/">No Page</Link>
      </li>
      <li>
        <Link to="/socket">Socket</Link>
      </li>
    </ul>
  </div>
)