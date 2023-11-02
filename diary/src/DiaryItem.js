const DiaryItem = ({ author, content, created_date, emotion, id }) => {
  return (
    <div className='DiaryItem'>
      <div className='info'>
        <span className='info_top'>
          author : {author} | emotion : {emotion}
        </span>
        <span className='date'>{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className='content'>{content}</div>
    </div>
  );
};

export default DiaryItem;
