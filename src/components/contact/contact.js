import React, { Component } from 'react';
import styles from './contact.css';
import Card from '../UI/Card/Card';
import ContactForm from '../UI/Forms/Form-contact/Form-contact';

class Contact extends Component {

  render() {
    const contactClasses = [
      styles.contact,
      this.props.animation ? styles.contactAnim : null
    ]
    return (
      <div className={contactClasses.join(' ')} id="contact">
        <div className={styles.wrapper}>
          <ContactForm />
        </div>
      </div>
    )
  }
}
  

export default Contact;