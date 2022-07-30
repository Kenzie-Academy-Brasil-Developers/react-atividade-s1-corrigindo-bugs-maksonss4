import { useState } from "react";
import Card from "../card";
import "./style.css";

export const CardsList = ({ cardsList }) => {
  const [suitFilter, setSuitFilter] = useState(false);
  const [filter, setFilter] = useState(null)

  const handleSuitFilter = (e) => {
    const filtrados = cardsList.filter(card => {
      return card.suit === e.target.id
    })
    setFilter(filtrados)
    setSuitFilter(true)
  };

  return (
    <>
    
    <div className="filter-container">
      <p>Filtrar por naipe</p>
      <div>
      <input
          onClick={() => setSuitFilter(false)}
          type="radio"
          id="TODOS"
          name="suit"
        />
        <label for="TODOS">Todos</label>

        <input
          onClick={handleSuitFilter}
          type="radio"
          id="SPADES"
          name="suit"
        />
        <label for="SPADES">Espadas</label>

        <input
          onClick={handleSuitFilter}
          type="radio"
          id="HEARTS"
          name="suit"
        />
        <label for="HEARTS">Copas</label>

        <input
          onClick={handleSuitFilter}
          type="radio"
          id="CLUBS"
          name="suit"
        />
        <label for="CLUBS">Paus</label>

        <input
          onClick={handleSuitFilter}
          type="radio"
          id="DIAMONDS"
          name="suit"
        />
        <label for="DIAMONDS">Ouros</label>
      </div>
    </div>
    <div>

      {!suitFilter ?
        cardsList.map((actual, index) => {
          return <Card card={actual} key={index}></Card>
        })
        : filter.map((actual, index) => {
          return <Card card={actual} key={index}></Card>
        })
        }
    </div>
    </>
  );
};