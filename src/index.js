import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// Find all widget divs
const widgetDivs = document.querySelectorAll('.bw-widgets');

// Inject our React App into each class
widgetDivs.forEach(div => {
    ReactDOM.render(
      <React.StrictMode>
        <App widget={div.dataset.widget} primaryColor={div.dataset.color} centerId={div.dataset.identifier}/>
      </React.StrictMode>,
        div
    );
});
