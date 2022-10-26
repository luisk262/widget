import React from "react";
import calendar from "./calendar.svg"
import contact from "./contact.svg"
import phone from "./phone.svg"
import wp from "./wp.svg"

export const Widget = () =>{
    return (
        <div id='floating_nav'>
            <a href='#' id='reservation'>
                <span>Reservar</span>
                <img   src={ calendar}/>
                </a>
            <a href='#' id='contact'><span>Contáctanos</span> <img   src={ contact}/></a>
            <a href='#' id='phone'><span>Teléfono</span><img   src={ phone}/></a>
            <a href='#' id='whatsapp'><span>Whatsapp</span><img   src={ wp}/></a>
        </div>
    )
}