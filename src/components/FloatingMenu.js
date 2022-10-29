import React from 'react';
import CalendarWidget from "./CalendarWidget"
import LeadWidget from './LeadWidget'

import calendar from "../assets/calendar.svg"
import contact from "../assets/contact.svg"
import phone from "../assets/phone.svg"
import wp from "../assets/wp.svg"

function FloatingMenu({data}) {
    
    return (
        <div id='floating_nav'>
            <a  id="calendar" > <span>Reservar</span> <img src={calendar} /></a>
            <a id='contact' ><span>Contáctanos</span> <img src={contact} /></a>
            <a id='phone'><span>Teléfono</span><img src={phone} /></a>
            <a id='whatsapp' ><span>Whatsapp</span><img src={wp} /></a>
            <div id="bewe-widget-container"></div>
            <div id="bewe-widget-container-lead"></div>
            
            <CalendarWidget centerId={data.centerId} />
            <LeadWidget centerId={data.centerId}/>
            
        </div>
    );
}

export default FloatingMenu;
