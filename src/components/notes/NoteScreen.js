import React from 'react';
import { useSelector } from 'react-redux';
import useForm from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
  const { active: note } = useSelector((state) => state.notes);

  const [formValues, handleInputChange] = useForm(note);
  const { title, body } = formValues;
  console.log(formValues);

  return (
    <div className='notes__main-content'>
      <NotesAppBar />

      <div className='notes__content'>
        <input
          type='text'
          placeholder='Title'
          className='notes__title-input'
          value={title}
          onChange={handleInputChange}
        />
        <textarea
          placeholder='What happened today'
          className='notes__textarea'
          value={body}
          onChange={handleInputChange}
        ></textarea>

        {note.url && (
          <div className='notes__image'>
            <img
              src='data:image/png;base64,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'
              alt='image example'
            />
          </div>
        )}
      </div>
    </div>
  );
};
