import React, { useEffect, useState } from 'react';

const SearchArticle: React.FC = () => {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getArticle();
  }, []);

  //API Afficher tous les articles
  const getArticle = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/article');
      const data = await response.json();
      setArticles(data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  //API Afficher un article en fonction de nom
  const SearchClick = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/api/article/${searchTerm}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setSearchResults([data]);

      setSearchTerm('');
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  
  //API Supression d'un article en fonction de son ID
  const deleteClick = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/delete/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorMessage = `Failed to delete article with ID: ${id}`;
        throw new Error(errorMessage);
      }

      //getArticle();
    } catch (error) {
      console.error('Error deleting article:', error);
      console.error(`Failed to delete article with ID: ${id}`);
    }
  };




  return (
    <div style={{ maxWidth: '400px', margin: 'auto', paddingTop: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>Recherche d'articles</h2>
      <form onSubmit={SearchClick} style={{ display: 'flex', flexDirection: 'column' }}>
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
          Rechercher
        </button>
        {searchResults.map((article, index) => (
          <div key={`${article.id}-${index}`} style={{ display: 'flex', flexDirection: 'column', borderBottom: '1px solid #ddd', marginBottom: '10px' }}>
            <p style={{ marginBottom: '5px' }}><b>Nom:</b> {article.nom} </p>
            <p style={{ marginBottom: '5px' }}><b>Description:</b> {article.description}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button onClick={() => deleteClick(article.id)} style={{ padding: '8px 10px', backgroundColor: '#D30000', color: 'white', cursor: 'pointer' }}>
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </form>

      <div style={{ maxWidth: '400px', margin: 'auto', paddingTop: '20px' }}>
        <h2 style={{ paddingTop: '10px' }}>Liste d'articles :</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #ddd', background: '#f2f2f2' }}>
              <th style={{ padding: '10px' }}>Nom</th>
              <th style={{ padding: '10px' }}>Description</th>
              <th style={{ padding: '10px' }}>Quantité</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article, index) => (
              <tr key={`${article.id}-${index}`} style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '10px' }}>{article.nom}</td>
                <td style={{ padding: '10px' }}>{article.description}</td>
                <td style={{ padding: '10px' }}>{article.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchArticle;
