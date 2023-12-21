import React, { useState, useEffect } from 'react';

const GetVerseComponent = () => {
  const [verseOfTheDay, setVerseOfTheDay] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/verse-of-the-day')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setVerseOfTheDay(data.verse);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching verse of the day:', error);
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <p>{verseOfTheDay}</p>
    </div>
  );
};

export default GetVerseComponent;
