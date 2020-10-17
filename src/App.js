import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('Aakash');
  
  function changeName () {
    setName('Mark');
  }

  return (
    <div className="App">
      Hello {name}

      <br/>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}

export default App;
