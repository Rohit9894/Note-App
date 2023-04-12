import React from "react";
import { AiFillDelete } from "react-icons/ai";

function Card({ id, description, handleDelete, created_at }) {
  return (
    <div className="card">
      <p>{description}</p>
      <p className="msg-date">{created_at}</p>
      <div className="delete-button" onClick={() => handleDelete(id)}>
        <AiFillDelete size={"24px"} />
      </div>
    </div>
  );
}

export default Card;
