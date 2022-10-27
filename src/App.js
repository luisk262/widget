import React, { useEffect } from 'react';
import FloatingMenu from "./components/FloatingMenu";

function App(props) {
  useEffect(()=>{
    const script = document.createElement("script");
    script.src = "https://web.bewe.co/widget/bewidget.js";
    script.async = true;
    script.onload = () => scriptLoaded();
  
    document.body.appendChild(script);
  })
  function scriptLoaded() {
    console.log("bw loaded")
    const script = document.createElement("script");
    script.innerHTML = `BW.on('click', '#register').init('#bewe-widget-container', {center: '${props.centerId}', path: 'register'})`
    script.onload = () => {console.log("load")};
    document.body.appendChild(script); 
  }
  return (
    <div>
      <FloatingMenu data={props}/>
    </div>
  );
}

export default App;
