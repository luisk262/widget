import React, { useEffect } from "react";

function LeadWidget(props) {
    console.log(props)
    useEffect(()=>{
        const script = document.createElement("script");
        script.innerHTML = `BW.on('click', '#contact').init('#bewe-widget-container', {center: '${props.centerId}', section: 'lead', extraData: {title: 'TITLE', description: 'DESCRIPTION'}})`
        script.async = true;
        script.onload = () => scriptLoaded();
        document.body.appendChild(script);
    })
    function scriptLoaded() {
        console.log("widgets loaded...")
    }
    return (<></>);
}

export default LeadWidget;