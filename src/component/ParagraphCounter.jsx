import React, { useState } from 'react';

function ParagraphCounter() {
  const [text, setText] = useState('');
  const paragraphs = text.split('\n').filter((p) => p.trim() !== '');
  const words = text.split(/\s+/).filter((word) => word.trim() !== ''); // Split by spaces to count words

  return (
    <div className="centered-container">
      <textarea
        rows="10"
        cols="50"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter or paste your text here..."
      ></textarea>
      <p>Number of Words: {words.length}</p> {/* Display word count */}
      {paragraphs.map((p, index) => (
        <div key={index}>
          <p>{p}</p>
        </div>
      ))}
    </div>
  );
}

export default ParagraphCounter;
