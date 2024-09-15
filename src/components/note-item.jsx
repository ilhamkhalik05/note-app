import { showFormattedDate } from '../utils';

function NoteItem({
  id,
  title,
  body,
  archived,
  createdAt,
  deleteNote,
  archiveNote,
  unArchiveNote,
}) {
  return (
    <div className="note-item">
      <h1 className="note-item_title">{title}</h1>
      <p className="note-item_body">{body}</p>
      <p className="note-item_createdAt">
        Dibuat: {showFormattedDate(createdAt)}
      </p>
      <div className="note-item_action">
        <button className="note-item_delete" onClick={() => deleteNote(id)}>
          Hapus
        </button>
        {archived ? (
          <button
            className="note-item_archived"
            onClick={() => unArchiveNote(id)}
          >
            Posting
          </button>
        ) : (
          <button
            className="note-item_archived"
            onClick={() => archiveNote(id)}
          >
            Arsipkan
          </button>
        )}
      </div>
    </div>
  );
}

export default NoteItem;
