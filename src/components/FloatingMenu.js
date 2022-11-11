import React from 'react';
import CalendarWidget from "./CalendarWidget"
import LeadWidget from './LeadWidget'

import calendar from "../assets/calendar.svg"
import contact from "../assets/contact.svg"
// import phone from "../assets/phone.svg"
import wp from "../assets/wp.svg"

function FloatingMenu({ data }) {

    return (
        <div id='floating_nav'>
            {/* Menu */}
                <ul className='menu'>
                    <li className='menu_item'>
                        <p>
                            <a id="calendar"><span>Reservar</span> <img src={calendar} /></a>
                        </p>
                    </li>
                    <li className='menu_item'>
                        <p>
                            <a id='contact' ><span>Contáctanos</span> <img style={{ height: "20px" }} src={contact} /></a>
                        </p>
                    </li>
                    <li className='menu_item'>
                        <p><a id='whatsapp' href='https://wa.me/573114579556' target="_blank" ><span>Whatsapp</span><img src={wp} /></a></p>
                    </li>
                </ul>
              {/* End Menu */}
            

            {/* Body Widgets */}
            <div id="bewe-widget-container"></div>
            <div id="bewe-widget-container-lead"></div>
            <CalendarWidget centerId={data.centerId} />
            <LeadWidget centerId={data.centerId} />
             {/* End Body Widgets */}
        </div>
    );
}

export default FloatingMenu;
