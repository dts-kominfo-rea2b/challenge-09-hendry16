// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css';


const Contact = ({ data }) => {
    const {name, phone, email, photo} = data;

    return (
        <div className='contact'>
            <img className='contact-image' src={photo} alt=''/>
            <div className='contact-li'>
                <p className='name'>{name}</p>
                <p className='phone'>{phone}</p>
                <p className='email'>{email}</p>
            </div>
        </div>
    )
}

export default Contact;