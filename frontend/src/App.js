import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Footer, Navbar,ProductDetailFile } from './components';
import { Home, Deal, Comic, Combo, RequestPage } from './pages';


const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deal" element={<Deal />} />
        <Route path="/combo" element={<Combo />} />
        <Route path="/comic" element={<Comic />} />
        <Route path="/request" element={<RequestPage />} />
        <Route path="/product/:productId" element={<ProductDetailFile />} /> {/* Add this route */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
