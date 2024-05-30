import { useState } from 'react';
import logo from './logo.svg'
import './App.css';
import BoxList from './BoxList.jsx';

/** Component for entire page.
 *
 * Props: none
 * State: none
 *
*/

function App() {
  return (
    <div className="App">
      <BoxList />
    </div>
  );
};

export default App;
