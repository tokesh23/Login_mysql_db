import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [listOfposts, setListOfpost] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4001/Posts')
      .then((response) => {
        setListOfpost(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the data:', error);
      });
  }, []);

  return (
    <div className='App'>
      {listOfposts.map((value, key) => (
        <div key={key} className='post'>
          <div className='title'>{value.title}</div>
          <div className='body'>{value.postText}</div>
          <div className='footer'>{value.username}</div>
        </div>
      ))}
    </div>
  );
};

export default App;
