import SearchNote from './search-note';

function AppHeader({ searchNote }) {
  return (
    <header className="app-header">
      <h1>Notes App</h1>

      <SearchNote
        searchNote={searchNote}
      />
    </header>
  );
}

export default AppHeader;
