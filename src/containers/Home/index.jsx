import React from 'react';
import Sidebar from '../../components/Sidebar';
import Content from '../../components/Content';
import { Link } from 'react-router-dom';

export default () => (
  <div>
    <div><Link to="ulugbek">ulugbek</Link></div>
    <div>
    <Link to="abdurashid">abdurashid</Link>
    </div>
    <div>
    <Link to="nozimjon">nozimjon</Link>
    </div>
    <div>
    <Link to="narimon">narimon</Link>
    </div>
    <Link to="donyor">donyor</Link>
  </div>
);
