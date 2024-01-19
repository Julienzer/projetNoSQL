// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AddArticle from './components/AddArticle';
import SearchArticle from './components/SearchArticle';
import SimpleNavbar from './components/Navbar';



const App: React.FC = () => {
  return (
    <Router>
      <SimpleNavbar/>
      <Routes>
        <Route path="/add" element={<AddArticle />} />
        <Route path="/search" element={<SearchArticle />} />
      </Routes>
    </Router>
  );
};

export default App;
