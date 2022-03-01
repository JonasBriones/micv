import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { HomeScreen } from '../components/home/HomeScreen';

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomeScreen />} >
                <Route path="/es" element={<HomeScreen />} />
                <Route path="/en" element={<HomeScreen />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
