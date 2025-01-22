import './input.css'
import React, { useState, useEffect } from 'react';

function InputContainer() {
  const [data, setData] = useState(null);
  const [requestData, setRequestData] = useState({ url: '' });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
      });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setRequestData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className='input-container'>
       <h1>URL <span>Shortener</span></h1>
      <input
        type="text"
        name="url"
        value={requestData.url}
        onChange={handleInputChange}
        placeholder="Enter URL"
      />
      <button onClick={fetchData}>Generate</button>
      {data ? (
        <p> Short url :<span> http://localhost:5000/{data.id}</span></p>
      ) : (
        <p>Enter url and click to generate!!</p>
      )}
    </div>
  );
}

export default InputContainer;
