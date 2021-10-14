import React, { useState } from "react";
import data from "./example-data.json";
import { nanoid } from "nanoid";
import MusicList from "./MusicList";

export default function Form() {
  const [musicItems, setMusicItems] = useState(data);

  const [addItem, setAddItem] = useState({
    title: "",
    artist: "",
    genre: "",
    rating: "",
  });

  function handleFormChange(e) {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newItemData = { ...addItem };
    newItemData[fieldName] = fieldValue;

    setAddItem(newItemData);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newMusicItem = {
      id: nanoid(),
      title: addItem.title,
      artist: addItem.artist,
      genre: addItem.genre,
      rating: addItem.rating,
    };

    const newMusicItems = [...musicItems, newMusicItem];
    setMusicItems(newMusicItems);
  }

  function handleDeleteClick(itemId) {
    const newMusicItems = [...musicItems];

    const index = musicItems.findIndex((item) => item.id === itemId);

    newMusicItems.splice(index, 1);

    setMusicItems(newMusicItems);
  }

  return (
    <div>
      <h1>World's greatest playlist</h1>
      <h2>Add a music item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          required="required"
          onChange={handleFormChange}
        />
        <input
          type="text"
          name="artist"
          placeholder="Artist"
          required="required"
          onChange={handleFormChange}
        />

        <select name="genre" onChange={handleFormChange}>
          <option value="">Genre</option>
          <option value="House">House</option>
          <option value="Pop">Pop</option>
          <option value="Rock">Rock</option>
        </select>

        <select name="rating" onChange={handleFormChange}>
          <option value="">Rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button type="submit">Submit</button>
      </form>

      <br />

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Genre</th>
            <th>Rating</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {musicItems.map((item) => (
            <MusicList item={item} handleDeleteClick={handleDeleteClick} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
