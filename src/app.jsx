import React from 'react';
import AddNote from './components/add-note';
import AppHeader from './components/app-header';
import NoteList from './components/note-list';
import SectionTitle from './components/section-title';
import { getInitialData } from './utils';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      filteredNotes: [],
      keyword: '',
    };

    this.getArchivedNote = this.getArchivedNote.bind(this);
    this.getUnArchivedNote = this.getUnArchivedNote.bind(this);
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
    this.onUnArchiveNoteHandler = this.onUnArchiveNoteHandler.bind(this);
    this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
  }

  getArchivedNote() {
    return this.state.notes.filter((note) => note.archived);
  }

  getUnArchivedNote() {
    return this.state.notes.filter((note) => !note.archived);
  }

  onDeleteNoteHandler(id) {
    const notes = this.state.notes.filter((contact) => contact.id !== id);
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date(),
          },
        ],
        filteredNotes: [],
      };
    });
  }

  onArchiveNoteHandler(id) {
    this.setState((prevState) => {
      return {
        notes: prevState.notes.map((note) =>
          note.id === id ? { ...note, archived: true } : note,
        ),
      };
    });
  }

  onUnArchiveNoteHandler(id) {
    this.setState((prevState) => {
      return {
        notes: prevState.notes.map((note) =>
          note.id === id ? { ...note, archived: false } : note,
        ),
      };
    });
  }

  onSearchNoteHandler(keyword) {
    if (keyword) {
      this.setState((prevState) => {
        return {
          filteredNotes: prevState.notes.filter((note) =>
            note.title.toLowerCase().includes(keyword.toLowerCase()),
          ),
          keyword,
        };
      });
    }
  }

  render() {
    const { filteredNotes, keyword } = this.state;
    const isSearching = filteredNotes.length > 0;

    return (
      <div className="app-container">
        <AppHeader searchNote={this.onSearchNoteHandler} />

        <main>
          <section className="app-section _add-note">
            <AddNote addNote={this.onAddNoteHandler} />
          </section>

          {isSearching ? (
            <section className="app-section _note-list">
              <SectionTitle
                title={`Menampilkan hasil pencarian dari "${keyword}"`}
              />
              <NoteList
                notes={this.state.filteredNotes}
                deleteNote={this.onDeleteNoteHandler}
                archiveNote={this.onArchiveNoteHandler}
                unArchiveNote={this.onUnArchiveNoteHandler}
              />
            </section>
          ) : (
            <>
              <section className="app-section _note-list">
                <SectionTitle title={'Catatan aktif'} />
                <NoteList
                  notes={this.getUnArchivedNote()}
                  deleteNote={this.onDeleteNoteHandler}
                  archiveNote={this.onArchiveNoteHandler}
                  unArchiveNote={this.onUnArchiveNoteHandler}
                />
              </section>

              <section className="app-section _note-list-archive">
                <SectionTitle title={'Arsip'} />
                <NoteList
                  notes={this.getArchivedNote()}
                  deleteNote={this.onDeleteNoteHandler}
                  archiveNote={this.onArchiveNoteHandler}
                  unArchiveNote={this.onUnArchiveNoteHandler}
                />
              </section>
            </>
          )}
        </main>
      </div>
    );
  }
}

export default App;
