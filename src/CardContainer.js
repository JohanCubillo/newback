import React, { useState } from 'react';
import './CardContainer.css';
import Card from './Card';

const CardContainer = () => {
  const [cards, setCards] = useState([
    { id: 1, title: 'Rammstein en CR', image: 'https://th.bing.com/th/id/OIP.NMZhvRsDyBKX4HRfa6XHewHaFj?pid=ImgDet&rs=1', buttonText: 'Ir a Rammstein', buttonHref: 'https://www.example.com/rammstein' },
    { id: 2, title: 'Arctic Monkeys en CR', image: 'https://revistapurgante.com/wp-content/uploads/2019/03/Arctic-monkeys-1024x570.png', buttonText: 'Ir a Arctic Monkeys', buttonHref: 'https://www.example.com/arcticmonkeys' },
    { id: 3, title: 'Interpol en CR', image: 'https://garajedelrock.com/wp-content/uploads/2022/04/interpol-estrena-dos-canciones-ineditas-en-su-inicio-de-gira.jpg', buttonText: 'Ir a Interpol', buttonHref: 'https://www.example.com/interpol' },
    { id: 4, title: 'Muse en CR', image: 'https://th.bing.com/th/id/OIP.FwHK5-Rd78Vh8q155mrB2gHaE8?pid=ImgDet&rs=1', buttonText: 'Ir a Muse', buttonHref: 'https://www.example.com/muse' },
    { id: 5, title: 'Gorillaz en CR', image: 'https://assets-prd.ignimgs.com/2021/11/25/gorillaz-1637839431672.jpg', buttonText: 'Ir a Gorillaz', buttonHref: 'https://www.example.com/gorillaz' },
    // Agrega más cards aquí
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="row">
        {filteredCards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            image={card.image}
            buttonText={card.buttonText}
            buttonHref={card.buttonHref}
          />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;