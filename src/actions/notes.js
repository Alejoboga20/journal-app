import { db, firebase } from '../firebase/firebase-config';

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime()
    };

    const docRef = await db.collection(`${uid}/journal/notes`).add(newNote);
    console.log(docRef);
  };
};
