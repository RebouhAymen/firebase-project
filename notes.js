import Note from "../components/note";
import NoteForm from "../components/noteForm";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { database, auth } from "../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
function Notes() {
  const [notes, setNotes] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    const notesRef = collection(database, "notes");
    const unsubscribe = onSnapshot(notesRef, (snapshot) => {
      const notesData = snapshot.docs.map((doc) => doc.data());
      setNotes(notesData);
    });
    return () => unsubscribe();
  }, [database]);
  return (
    <div className="notes-container">
      {user ? <NoteForm /> : <Link to="/login">Login to add a note</Link>}
      <h2>All Notes:</h2>
      {notes.map((note, index) => {
        return <Note key={index} text={note.text} name={note.name} />;
      })}
    </div>
  );
}
export default Notes;
