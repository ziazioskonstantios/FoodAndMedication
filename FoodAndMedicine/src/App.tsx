import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MyMedicines from './pages/MyMedicines';
import AddOrRemoveMedicine from './pages/AddOrRemoveMedicine';
import LastMeals from './pages/LastMeals';
import AddOrRemoveMeal from './pages/AddOrRemoveMeal';
import MainPage from './pages/MainPage';
import LandingPage from './pages/LandingPage';
import MedicationImportMenuPage from './pages/MedicationImportMenuPage';
import MedicationImportPage from './pages/MedicationImportPage';
import MyMedicinePage from './pages/MyMedicinePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/medication-import-menu" element={<MedicationImportMenuPage />} />
        <Route path="/medication-import" element={<MedicationImportPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/my-medicines" element={<MyMedicinePage />} />
        <Route path="/add-or-remove-medicine" element={<AddOrRemoveMedicine />} />
        <Route path="/last-meals" element={<LastMeals />} />
        <Route path="/add-or-remove-meal" element={<AddOrRemoveMeal />} />
      </Routes>
    </Router>
  );
};

export default App;