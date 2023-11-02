import DiaryItem from './DiaryItem';

const DiaryList = ({ diaryList }) => {
  return (
    <div className='DiaryList'>
      <h2>Diary List</h2>
      <h3>There are {diaryList.length} diaries recorded.</h3>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
