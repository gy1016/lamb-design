import React from 'react';
import Button from './components/Button/button';

function App() {
  return (
    <div className="App">
      <h1>gaoyang</h1>
      <code>const a = 'b'</code>
      <Button>按钮</Button>
      <Button btnType={'primary'} href={'www.sgyat.cn'} size={'sm'}>
        按钮
      </Button>
    </div>
  );
}

export default App;
