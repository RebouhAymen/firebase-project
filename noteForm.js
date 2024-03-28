import { useState } from "react";
import { setDoc, doc, collection } from "firebase/firestore";
import { database, auth } from "../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
function NoteForm() {
  const [note, setNote] = useState([]);
  const [user] = useAuthState(auth);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const collectionRef = collection(database, "notes");
      const docRef = doc(collectionRef);
      await setDoc(docRef, {
        text: note,
        name: user.email,
      });
      alert("Data has been created");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label htmlFor="note-text">Note Text:</label>
        <textarea
          id="note-text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Enter your note"
          required
        ></textarea>
      </div>
      <button type="submit">Add Note</button>
    </form>
  );
}

export default NoteForm;
