import React, { useState, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider, Button } from '@mantine/core';

import './index.css';
import Loading from './Loading';

const basename = process.env.NODE_ENV === 'development' ? '' : 'fractals';

function App() {
  const [count, setCount] = useState(1);
  return (
    <Suspense fallback={<Loading />}>
      <div>This is React component</div>
      <div>counter: <span>{count}</span></div>
      <button onClick={() => setCount(count+1)}>Increment</button>
      <Button onClick={() => setCount(count-1)}>Decrement</Button>
    </Suspense>
  );
}


// ========== typically separate file ===============
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <App />
    </MantineProvider>
  </React.StrictMode>
);

