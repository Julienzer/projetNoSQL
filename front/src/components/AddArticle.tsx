// components/AddArticle.tsx
import React, { useState } from 'react';

const AddArticle: React.FC = () => {
  const [article, setArticle] = useState({ name: '', quantity: 0 });

  const handleAddArticle = (e: React.FormEvent) => {
    e.preventDefault();

    // Ajouter le code pour traiter l'ajout côté front-end
    console.log('Article added:', article);

    // Réinitialiser le formulaire après l'ajout réussi
    setArticle({ name: '', quantity: 0 });
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', paddingTop: '20px'}}>
      <h2 style={{ textAlign: 'center', marginBottom:20}}>Ajouter un article</h2>
      <form onSubmit={handleAddArticle} style={{ display: 'flex', flexDirection: 'column' }}>
        <label style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
          Nom de l'article :
          <input
            type="text"
            value={article.name}
            onChange={(e) => setArticle({ ...article, name: e.target.value })}
            required
            style={{ margin: '10px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </label>
        <label style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
          Quantité :
          <input
            type="number"
            min={0}
            onChange={(e) => setArticle({ ...article, quantity: +e.target.value })}
            required
            style={{ margin: '10px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </label>
        <button type="submit" style={{ padding: '10px', backgroundColor: '#4CAF50', color: 'white', cursor: 'pointer' }}>
          Add Article
        </button>
      </form>
    </div>
  );
};

export default AddArticle;