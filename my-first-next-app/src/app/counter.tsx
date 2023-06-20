'use client';

import { useState } from 'react';

export default function Counter() {
  let [count, setCount] = useState(0);
  if(count === 11){
    setCount(count = 0);
  }
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Click me, please im desperate!
      </button>
      <p>Ahh, You clicked me {count} times</p>
    </div>
  );
}