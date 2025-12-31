import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Dashboard from './components/Dashboard';
import SecurityNotice from './components/SecurityNotice';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navbar />
      <Hero />
      <Features />
      <Dashboard />
      <SecurityNotice />
      <About />
      <Footer />
    </div>
  );
}

export default App;
