import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
  } from "react-router-dom";
import { PageNotFoundScreen } from './components/error/PageNotFoundScreen';
import { HomeScreen } from './components/home/HomeScreen';

import './styles/styles.scss';
export const Micv = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Navigate to="/:es" /> } />
            <Route path="/:es" element={ <HomeScreen /> } />
            <Route path="/:en" element={ <HomeScreen /> } />
            <Route path="*" element={ < PageNotFoundScreen /> } />
        </Routes>
    </BrowserRouter>
  )
}
