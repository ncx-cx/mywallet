import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/style/main.css';
import WithdrawalAddressManagement from './pages/profile/withdrawal-address-management';
import SupportPage from './pages/support/support';
import TestTabs from './pages/profile/new-profile';

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<TestTabs />} />
          <Route path='withdraw-address-management' exact element={<WithdrawalAddressManagement />} />
          <Route path='/support' exact element={<SupportPage />} />
          <Route path='/:profile_settings/?' element={<TestTabs />} />
        </Routes>
      </BrowserRouter>
);
};

export default App;
