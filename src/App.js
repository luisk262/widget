import React from 'react';
import FloatingMenu from "./components/FloatingMenu";

function App(props) {

  return (
    <div>
      <FloatingMenu symbol={props.symbol}/>
    </div>
  );
}

export default App;
