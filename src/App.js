import React from 'react';
import FloatingMenu from "./components/FloatingMenu";

function App(props) {
  return (
    <div>
      <FloatingMenu data={props}/>
    </div>
  );
}

export default App;
