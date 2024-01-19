// components/SearchArticle.tsx
import React, { useState } from 'react';

const SearchArticle: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    // Ajouter ici le code pour traiter la recherche côté front-end
    console.log('Search term:', searchTerm);
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', paddingTop: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>Recherche d'articles</h2>
      <form onSubmit={handleSearch} style={{ display: 'flex', flexDirection: 'column' }}>
        <label style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
          Mot clé :
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ margin: '5px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </label>
        <button type="submit" style={{ padding: '10px', backgroundColor: '#4CAF50', color: 'white', cursor: 'pointer' }}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchArticle;
