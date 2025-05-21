import { Modal } from "./components/Modal";
import React from "react";
import { useState } from "react";
export default function App() {
  const [modals, setModals] = useState([]);

  const openModal = () => {
    const id = Date.now();
    setModals((prev) => [...prev, id]);
  }

  const closeModal = (id) => {
    setModals((prev) => prev.filter((modalId) => modalId !== id));
  }

  return (
    <div>
      <div>
        <h1>Hello World!</h1>
        <button onClick={openModal}>Open Modal</button>
      </div>

      {modals.map((id, index) => (
        <Modal
          key={id}
          open={true}
          onClose={() => closeModal(id)}
          zindex={1000 + index}
          offset={index * 20}
        >
          <div>
            <h2>Modal #{index + 1}</h2>
            <p>Example Modal</p>
          </div>
        </Modal>
      ))}
    </div>
  );
}

