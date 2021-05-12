import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  startLoadingNotes,
  startNewNote,
  startSaveNote,
  startUploading
} from '../../actions/notes';
import { db } from '../../firebase/firebase-config';
import { fileUpload } from '../../helpers/fileUpload';
import { types } from '../../types/types';

jest.mock('../../helpers/fileUpload', () => ({
  fileUpload: jest.fn(() => {
    return Promise.resolve('https://helloworld.com/thing.jpg');
  })
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialState = {
  auth: { uid: 'testUid' },
  notes: {
    active: {
      id: '3ccXDme0dPKRvivXvhE8',
      title: 'Hello',
      body: 'World'
    }
  }
};

let store = mockStore(initialState);

describe('Notes actions tests', () => {
  beforeEach(() => (store = mockStore(initialState)));

  test('should create a new note with startNewNote', async () => {
    await store.dispatch(startNewNote());

    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: types.notesActive,
      payload: {
        id: expect.any(String),
        title: '',
        body: '',
        date: expect.any(Number)
      }
    });
    expect(actions[1]).toEqual({
      type: types.notesAddNew,
      payload: {
        id: expect.any(String),
        title: '',
        body: '',
        date: expect.any(Number)
      }
    });
    const docId = actions[0].payload.id;
    await db.doc(`/testUid/journal/notes/${docId}`).delete();
  });

  test('should load notes', async () => {
    await store.dispatch(startLoadingNotes('testUid'));
    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: types.notesLoad,
      payload: expect.any(Array)
    });

    const expected = {
      id: expect.any(String),
      title: expect.any(String),
      body: expect.any(String),
      date: expect.any(Number)
    };

    expect(actions[1].payload[0]).toMatchObject(expected);
  });

  test('should update note', async () => {
    const note = {
      id: 'aaLX8wkFpWHhEabCLHnw',
      title: 'TestTitle',
      body: 'TestBody'
    };

    await store.dispatch(startSaveNote(note));
    const actions = store.getActions();

    expect(actions[0].type).toBe(types.notesUpdated);

    const docRef = await db.doc(`/testUid/journal/notes/${note.id}`).get();
    expect(docRef.data().title).toBe(note.title);
  });

  test('should start uploading and update entry url', async () => {
    const file = new File([], 'foto.jpg');
    await store.dispatch(startUploading(file));

    const docRef = await db
      .doc('/testUid/journal/notes/3ccXDme0dPKRvivXvhE8')
      .get();
    expect(docRef.data().url).toBe('https://helloworld.com/thing.jpg');
  });
});
