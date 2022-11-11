import React from 'react';
import CalendarWidget from "./CalendarWidget"
import LeadWidget from './LeadWidget'

function FloatingMenu({ data }) {
    const images={
        wp:"https://cdn.filestackcontent.com/x1mKqh4ATOMMo21IDyug",
        phone:"https://cdn.filestackcontent.com/j7EzeIg4T7qfetC8Rhuf",
        contact:"https://cdn.filestackcontent.com/pJ4gprCSomcXy1yAqusH",
        calendar:"https://cdn.filestackcontent.com/VA23IN4CQ3S8uyt6qnX8"
    }
    return (
        <div id='floating_nav'>
            {/* Menu */}
                <ul className='menu'>
                    <li className='menu_item'>
                        <p>
                            <a id="calendar"><span>Reservar</span> <img src={images.calendar} /></a>
                        </p>
                    </li>
                    <li className='menu_item'>
                        <p>
                            <a id='contact' ><span>Contáctanos</span> <img style={{ height: "20px" }} src={images.contact} /></a>
                        </p>
                    </li>
                    <li className='menu_item'>
                        <p><a id='whatsapp' href='https://wa.me/573114579556' target="_blank" ><span>Whatsapp</span><img src={images.wp} /></a></p>
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
