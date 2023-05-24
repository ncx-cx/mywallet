import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/style/main.css';
import WithdrawalAddressManagement from './pages/profile/withdrawal-address-management';
import SupportPage from './pages/support/support';
import TestTabs from './pages/profile/new-profile';
import BasicVerification from './components/verification/basic-verification';
import WalletPage from './pages/wallet/wallet';

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<WalletPage />} />
          {/* <Route path='/:unified_account/?' element={<WalletPage />} /> */}
          <Route path='withdraw-address-management' exact element={<WithdrawalAddressManagement />} />
          <Route path='/support' exact element={<SupportPage />} />
          <Route path='/:profile_settings/?' element={<TestTabs />} />
          <Route path='/auth/key/upload' element={<BasicVerification />} />
          {/* <Route path='/wallet' element={<WalletPage />} /> */}
        </Routes>
      </BrowserRouter>
);
};

export default App;
