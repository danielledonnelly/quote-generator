import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './QuoteGenerator.css'; // Ensure this file exists

const QuoteGenerator = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://api.quotable.io/random');
      setQuote(response.data.content);
      setAuthor(response.data.author);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="quote-container">
      <p className="quote">"{quote}"</p>
      <p className="author">- {author}</p>
      <button onClick={fetchQuote}>New Quote</button>
    </div>
  );
};

export default QuoteGenerator;