import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeNote, startDeleteNote } from '../../actions/notes';
import useForm from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
  const { active: note } = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const [formValues, handleInputChange, reset] = useForm(note);
  const { title, body } = formValues;

  const activeId = useRef(note.id);

  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id;
    }
  }, [note, reset]);

  useEffect(() => {
    dispatch(activeNote(formValues.id, { ...formValues }));
  }, [formValues, dispatch]);

  const handleDelete = () => {
    dispatch(startDeleteNote(note.id));
  };

  return (
    <div className='notes__main-content'>
      <NotesAppBar />

      <div className='notes__content'>
        <input
          type='text'
          name='title'
          placeholder='Title'
          className='notes__title-input'
          value={title}
          onChange={handleInputChange}
        />
        <textarea
          placeholder='What happened today'
          className='notes__textarea'
          name='body'
          value={body}
          onChange={handleInputChange}
        ></textarea>

        {note.url && (
          <div className='notes__image'>
            <img src={note.url} alt='image example' />
          </div>
        )}
      </div>

      <button className='btn btn-danger' onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
