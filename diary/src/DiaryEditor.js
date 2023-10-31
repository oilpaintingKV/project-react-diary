import { useState } from 'react';

const DiaryEditor = () => {
  const [state, setState] = useState({
    author: '',
    content: '',
    emotion: 1,
  });

  // const [author, setAuthor] = useState('');
  // const [content, setContent] = useState('');

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log(state);
    alert('saved!');
  };

  return (
    <div className='DiaryEditor'>
      <h1>Today's Diary</h1>
      <div>
        <input
          name='author'
          value={state.author}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <textarea
          name='content'
          value={state.content}
          onChange={handleChangeState}
        ></textarea>
      </div>
      <div className='score'>
        <span>Today's emotional score : </span>
        <select
          name='emotion'
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>save diary</button>
      </div>
    </div>
  );
};

export default DiaryEditor;
