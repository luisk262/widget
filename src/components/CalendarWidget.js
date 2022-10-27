import React, { useEffect } from "react";

function CalendarWidget(props) {
    console.log(props)
    useEffect(()=>{
        const script = document.createElement("script");
        script.innerHTML = `BW.on('load').init('#bewe-widget-container', {center: ${props.centerId}, path: 'register', insideHtml: true})`
        script.async = true;
        script.onload = () => scriptLoaded();
        document.body.appendChild(script);
        
    })
    function scriptLoaded() {
        console.log("register loaded")
    }
    
    return (<></>);
}

export default CalendarWidget;