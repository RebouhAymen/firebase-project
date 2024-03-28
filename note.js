function Note({ text, name }) {
  return (
    <div className="note-container">
      <p className="note-text">{text}</p>
      <p className="note-author">Created by: {name}</p>
    </div>
  );
}

export default Note;
