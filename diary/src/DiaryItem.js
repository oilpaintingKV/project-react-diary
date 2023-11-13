import { useRef, useState } from 'react';

const DiaryItem = ({
  onEdit,
  onRemove,
  author,
  content,
  created_date,
  emotion,
  id,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);

  const [localContent, setLocalContent] = useState(content);
  const localContentInput = useRef();

  const handleRemove = () => {
    if (window.confirm(`Are you sure you want to delete the ${id}th diary?`)) {
      onRemove(id);
    }
  };

  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
  };

  const handleEdit = () => {
    if (localContent.length < 5) {
      localContentInput.current.focus();
      return;
    }

    if (window.confirm(`Are you sure you want to edit the ${id}th diary?`)) {
      onEdit(id, localContent);
      toggleIsEdit();
    }
  };

  return (
    <div className='DiaryItem'>
      <div className='info'>
        <span className='info_top'>
          author : {author} | emotion : {emotion}
        </span>
        <span className='date'>{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className='content'>
        {isEdit ? (
          <>
            <textarea
              ref={localContentInput}
              value={localContent}
              onChange={(e) => setLocalContent(e.target.value)}
            />
          </>
        ) : (
          <>{content}</>
        )}
      </div>
      {isEdit ? (
        <>
          <button className='btn_remove' onClick={handleQuitEdit}>
            cancel edit
          </button>
          <button className='btn_edit' onClick={handleEdit}>
            finish edit
          </button>
        </>
      ) : (
        <>
          <button className='btn_remove' onClick={handleRemove}>
            remove
          </button>
          <button className='btn_edit' onClick={toggleIsEdit}>
            edit
          </button>
        </>
      )}
    </div>
  );
};

export default DiaryItem;
