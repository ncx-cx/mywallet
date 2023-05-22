import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProfilePage from './pages/profile/profile';
import './assets/style/main.css';
import SecuritydeviceManager from './pages/profile/security-devi-manager';
import WithdrawalAddressManagement from './pages/profile/withdrawal-address-management';

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<ProfilePage />} />
          <Route path='security-device-manager' exact element={<SecuritydeviceManager />} />
          <Route path='withdraw-address-management' exact element={<WithdrawalAddressManagement />} />
        </Routes>
      </BrowserRouter>
);
};

export default App;
