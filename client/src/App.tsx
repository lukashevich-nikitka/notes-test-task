import React, { useEffect } from 'react';
import notesThunks from './store/structure/thunks';
import NoteInput from './components/note_input';
import NotesList from './components/notes_list';
import { useAppDispatch } from './types/redux_hooks';
import './styles/App.scss';

const App: React.FC = function () {
  const { getNotesList } = notesThunks;
  const dispatch = useAppDispatch();
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
};

export default App;
