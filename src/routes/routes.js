import React from 'react';
import { Navigate } from 'react-router-dom';
import Users from '../views/Users/List';
import Home from '../containers/Home';
import Ulugbek from "../containers/ulugbek/mainHome"
import Abdurashid from "../containers/abdurashid/index"
import Nozimjon from "../containers/nozimjon/index"
import Narimon from "../containers/narimon/narimon"
import Donyor from "../containers/donyor/index"

export const routes = [
  {
    // element: <Home />,
    children: [
      { index: true, element: <Home /> },
      { path: "/ulugbek", element: < Ulugbek/> },
      { path: "/abdurashid", element: < Abdurashid/> },
      { path: "/nozimjon", element: < Nozimjon/> },
      { path: "/narimon", element: < Narimon/> },
      { path: "/donyor", element: < Donyor/> },
    ],
  },
];
