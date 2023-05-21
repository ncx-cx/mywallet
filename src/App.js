import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProfilePage from './pages/profile/profile';
import './assets/style/main.css';

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
);
};

export default App;
