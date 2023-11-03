import React, { useState } from 'react';

function C1() {
  const [wordCount, setWordCount] = useState(0);

  const count = (e) => {
    const text = e.target.value;
    const words = text.split(/\s+/).filter(Boolean);
    setWordCount(words.length);
  };

  return (
    <div ><center><div  style={{ boxShadow: '1px 1px 1px grey',width: 450, height: 450, borderRadius: '25px' }}>
      <h3>Responsive Paragraph Word</h3>
      <h3>Counter</h3>
      <input
        type="text"
        style={{ width: 250, height: 250, borderRadius: '25px' }}
        onKeyDown={count}
      />
      <p>
        word Count <span id="co">{wordCount}</span>
      </p></div></center>
    </div>
  );
}

export default C1;
