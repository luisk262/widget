import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

import calendar from "./calendar.svg"
import CalendarWidget from './CalendarWidget';
import contact from "./contact.svg"
import phone from "./phone.svg"
import PhoneWidget from './PhoneWidget';
import wp from "./wp.svg"

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

function FloatingMenu(props) {
    const [type, setType] = useState('');
    const [showContact, setContact] = useState(false);
    const [showPhone, setPhone] = useState(false);
    const [showWhatsapp, setWhatsapp] = useState(false);

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal(modalType) {
        setIsOpen(true);
        setType(modalType)
    }

    function afterOpenModal() {
        switch (type) {
            case 'reservation':
                console.log("reserva cargada", type)
                break;
            default:
                console.log("default")
        }
    }

    function closeModal() {
        setIsOpen(false);
        setType('')
    }


    return (
        <div id='floating_nav'>
            <a id='reservation' onClick={() => { openModal('reservation') }}> <span>Reservar</span> <img src={calendar} /></a>
            <a id='contact' onClick={() => { openModal('contact') }}><span>Contáctanos</span> <img src={contact} /></a>
            <a id='phone' onClick={() => { openModal('phone') }}><span>Teléfono</span><img src={phone} /></a>
            <a id='whatsapp' onClick={() => { openModal('whatsapp') }}><span>Whatsapp</span><img src={wp} /></a>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button onClick={closeModal}>X</button>
                {type === 'reservation' && <CalendarWidget />}
                {type === 'phone' && <PhoneWidget />}
            </Modal>

        </div>
    );
}

export default FloatingMenu;
