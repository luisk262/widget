import React, { useEffect } from "react";

function CalendarWidget(props) {
    useEffect(()=>{
        const script = document.createElement("script");
        script.innerHTML = `BW.on('click', '#calendar').init('#bewe-widget-container', {center: '${props.centerId}'})`
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