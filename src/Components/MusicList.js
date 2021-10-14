import React from "react";

export default function MusicList({ item, handleDeleteClick }) {
  return (
    <tr>
      <td>{item.title}</td>
      <td>{item.artist}</td>
      <td>{item.genre}</td>
      <td>{item.rating}</td>
      <td>
        <button type="button" onClick={() => handleDeleteClick(item.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
}
