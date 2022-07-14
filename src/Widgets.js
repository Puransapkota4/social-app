import React from 'react';
import "./Widgets.css";

function Widgets() {
  return (
    <div className='Widgets'>
        <iframe
        src='https://www.vu.edu.au/' 
        width="340"
        height= "100"
        style={{border:"none", overflow:"hidden"}}
        scrolling= "no"
        frameborder= "0"
        allowTransparency= "true"
        allow='encrypted-media'  >

        </iframe>
      
    </div>
  );
}

export default Widgets;
