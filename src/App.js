import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';

// const Footer = lazy(() => import('./components/Footer/Footer'));
// const Header = lazy(() => import('./components/Header/Header'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const AnalyticsPage = lazy(() => import('./pages/AnalyticsPage'));
const PlanPage = lazy(() => import('./pages/PlanPage'));
const CamerasPage = lazy(() => import('./pages/CamerasPage'));
const InternetPage = lazy(() => import('./pages/InternetPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<Loader />}>
              <AboutPage />
            </Suspense>
          }
        />
        <Route
          path="/analytics"
          element={
            <Suspense fallback={<Loader />}>
              <AnalyticsPage />
            </Suspense>
          }
        />
        <Route
          path="/plan"
          element={
            <Suspense fallback={<Loader />}>
              <PlanPage />
            </Suspense>
          }
        />
        <Route
          path="/cameras"
          element={
            <Suspense fallback={<Loader />}>
              <CamerasPage />
            </Suspense>
          }
        />
        <Route
          path="/internet"
          element={
            <Suspense fallback={<Loader />}>
              <InternetPage />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<Loader />}>
              <NotFoundPage />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
