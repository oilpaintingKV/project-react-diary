import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [
  {
    id: 1,
    author: 'oilpainting',
    content: "hello! it's a beautiful night",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: 'son',
    content: 'nice one sonny~ nice one son~',
    emotion: 1,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: 'korean guy',
    content: "yes, i'm the guy",
    emotion: 2,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className='App'>
      <h1>My Diary</h1>
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
