import './App.css';
import './styles/home.css'
import React, { Suspense } from 'react';
import { HashRouter, Route, Router, Routes, Switch } from 'react-router-dom';
import OTPPage from './pages/OTPPage';
import MatchSelectionPage from './pages/MatchSelectionPage';
import MatchPage from './pages/MatchPage';
import { BrowserRouter } from 'react-router-dom';
import FAQPage from './pages/FAQPage';
import TCPage from './pages/TCPage';
import ThirdPartyLoadingPage from './pages/ThirdPartyLoadingPage';
const HomePage = React.lazy(() => import('./pages/HomePage'))
const LoginPage = React.lazy(() => import('./pages/LoginPage'))

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

function App() {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Switch>
            <Route exact path="/" name="Home" component={HomePage} />
            <Route path="/faq" name="FAQ" component={FAQPage} />
            <Route path="/tc" name="FAQ" component={TCPage} />
            <Route path="/login" name="Login" component={LoginPage} />
            <Route path="/otp" name="OTP" component={OTPPage} />
            <Route path="/selection" name="Match-Selection" component={MatchSelectionPage} />
            <Route path="/match" name="Match" component={MatchPage} />
            <Route path="/third-party" name="Third-Party" component={ThirdPartyLoadingPage} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
