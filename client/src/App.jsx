import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import notesThunks from './store/structure/thunks';
import NoteInput from './components/note_input';
import NotesList from './components/notes_list';
import './styles/App.scss';

function App() {
  const { getNotesList } = notesThunks;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNotesList());
  });
  return (
    <>
      <header>
        <div className="header-container">
          <h1>N o t e s</h1>
          <h3>{'Better write it down, so you don\'t forget'}</h3>
        </div>
      </header>
      <main>
        <div className="main-container">
          <NoteInput />
          <NotesList />
        </div>
      </main>
      <footer>
        <div className="footer-container">
          <h5>Phone: +375292580911</h5>
          <h5>Email: lukashevich-nikitka@bk.ru</h5>
        </div>
      </footer>
    </>
  );
}

export default App;
