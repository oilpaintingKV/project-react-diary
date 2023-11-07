const DiaryItem = ({
  onDelete,
  author,
  content,
  created_date,
  emotion,
  id,
}) => {
  return (
    <div className='DiaryItem'>
      <div className='info'>
        <span className='info_top'>
          author : {author} | emotion : {emotion}
        </span>
        <span className='date'>{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className='content'>{content}</div>
      <button
        className='btn_delete'
        onClick={() => {
          console.log(id);
          if (
            window.confirm(`Are you sure you want to delete the ${id}th diary?`)
          ) {
            onDelete(id);
          }
        }}
      >
        delete
      </button>
    </div>
  );
};

export default DiaryItem;
