import { NOTE_LIST_EMPTY_MESSAGE } from '../utils/const';
import NoteItem from './note-item';

function NoteList({ notes, deleteNote, archiveNote, unArchiveNote }) {
  if (notes.length === 0) {
    return (
      <div className="note-list_empty">
        <h1 className="note-list_empty_message">{NOTE_LIST_EMPTY_MESSAGE}</h1>
      </div>
    );
  }

  return (
    <div className="note-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          deleteNote={deleteNote}
          archiveNote={archiveNote}
          unArchiveNote={unArchiveNote}
          {...note}
        />
      ))}
    </div>
  );
}

export default NoteList;
