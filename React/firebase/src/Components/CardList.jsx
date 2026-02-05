import React, { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../Firebase/firebase";

function CardList() {
  const [cards, setCards] = useState([]);

  const fetchCards = async () => {
    const snapshot = await getDocs(collection(db, "cards"));
    const data = snapshot.docs.map((item) => ({
      id: item.id,
      ...item.data(),
    }));
    setCards(data);
  };

  const deleteCard = async (id) => {
    await deleteDoc(doc(db, "cards", id));
    fetchCards();
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <div>
      <h2>📋 Card List</h2>

      {cards.map((card) => (
        <div key={card.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <h3>{card.title}</h3>
          <p>{card.desc}</p>
          <button onClick={() => deleteCard(card.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default CardList;
