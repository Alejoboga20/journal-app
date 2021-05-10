import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUploading } from '../../actions/notes';

export const NotesAppBar = () => {
  const dateToDisplay = new Date();
  const { active: note } = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(startSaveNote(note));
  };

  const handlePictureClick = () => {
    document.querySelector('#fileSelector').click();
  };

  const handleFileChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];

    if (file) {
      dispatch(startUploading(file));
    }
  };

  return (
    <div className='notes__appbar'>
      <span>{dateToDisplay.getDate()}</span>

      <input
        id='fileSelector'
        name='file'
        type='file'
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <div>
        <button className='btn' onClick={handlePictureClick}>
          Picture
        </button>
        <button className='btn' onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};
