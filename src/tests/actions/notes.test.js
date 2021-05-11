import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startNewNote } from '../../actions/notes';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore({
  auth: 'testUid'
});

describe('Notes actions tests', () => {
  test('should create a new note with startNewNote', async () => {
    await store.dispatch(startNewNote());
  });
});
