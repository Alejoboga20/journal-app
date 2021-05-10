import { types } from '../../types/types';

const benchmark = {
  login: '[auth] Login',
  logout: '[auth] Logout',

  uiSetError: '[UI] Set Error',
  uiRemoveError: '[UI] Remove Error',
  uiStartLoading: '[UI] Start Loading',
  uiFinishLoading: '[UI] Finish Loading',

  notesAddNew: '[notes] New Note',
  notesActive: '[notes] Set Active Note',
  notesLoad: '[notes] Load Notes',
  notesUpdated: '[notes] Update note saved',
  notesFileUrl: '[notes] Updated image url',
  notesDelete: '[notes] Delete note',
  notesLogoutCleaning: '[Notes] Logout Cleaning'
};

describe('types tests', () => {
  test('should container expected values', () => {
    expect(types).toEqual(benchmark);
  });
});
