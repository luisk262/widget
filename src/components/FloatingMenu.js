import React, { useState, useEffect } from 'react';

import calendar from "./calendar.svg"
import CalendarWidget from './CalendarWidget';
import contact from "./contact.svg"
import LeadWidget from './LeadWidget';
import phone from "./phone.svg"

import wp from "./wp.svg"

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
