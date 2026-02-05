import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase/firebase";

function AddCard() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleAdd = async () => {
    if (!title || !desc) return alert("Fill all fields");

    await addDoc(collection(db, "cards"), {
      title,
      desc,
    });

    setTitle("");
    setDesc("");
    alert("Card Added ✅");
  };

  return (
    <div>
      <h2>➕ Add Card</h2>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br /><br />

      <textarea
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <br /><br />

      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default AddCard;
