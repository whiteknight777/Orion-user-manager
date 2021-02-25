import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Dashboard from './pages/Dashboard/Dashboard';
import './App.css';

function App() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />
            <Header />
            <main className="main-height">
                <Dashboard />
            </main>
        </div>
    );
}

export default App;
