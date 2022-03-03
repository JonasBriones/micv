import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { HomeScreen } from '../components/home/HomeScreen';
import { NotFoundScreen } from '../components/notfound/NotFoundScreen';

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="*" element={<NotFoundScreen />} />
        </Routes>
    </BrowserRouter>
  )
}
